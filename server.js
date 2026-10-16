import express from 'express'
import nodemailer from 'nodemailer'
import { rateLimit } from 'express-rate-limit'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { partnerConfirmation } from './email/partner-confirmation.js'

export function createApp({ env = process.env, sendMail } = {}) {
 const app = express()
 app.disable('x-powered-by')
 // Hostinger terminates requests at its reverse proxy.
 app.set('trust proxy', 1)
 app.use(express.json({ limit: '8kb' }))
 const limiter = rateLimit({ windowMs: 60 * 60 * 1000, limit: 5, standardHeaders: 'draft-8', legacyHeaders: false, message: { message: 'Has enviado varias solicitudes. Inténtalo más tarde.' } })
 let transporter
 app.post('/api/partner-request', limiter, async (req, res) => {
  if (req.get('origin') && new URL(req.get('origin')).host !== req.get('host')) return res.status(403).json({ message: 'Origen no permitido.' })
  const data = req.body || {}
  if (data.website) return res.json({ ok: true })
  const fields = ['Hotel', 'Distrito', 'Contacto', 'Teléfono', 'Correo']
  if (fields.some(key => typeof data[key] !== 'string' || !data[key].trim() || data[key].length > 160 || /[\r\n]/.test(data[key])) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.Correo) || data['Autorización de contacto'] !== 'Sí') return res.status(400).json({ message: 'Revisa los campos y autoriza que te contactemos.' })
  if (!sendMail && ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'MAIL_TO'].some(key => !env[key])) return res.status(503).json({ message: 'El envío no está disponible por el momento. Escríbenos a hola@wakipe.com.' })
  try {
   if (!sendMail && !transporter) transporter = nodemailer.createTransport({ host: env.SMTP_HOST, port: Number(env.SMTP_PORT || 465), secure: env.SMTP_SECURE !== 'false', auth: { user: env.SMTP_USER, pass: env.SMTP_PASS }, connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000 })
   const result = await (sendMail || transporter.sendMail.bind(transporter))({ from: { name: 'WAKI — Afiliaciones', address: env.SMTP_USER }, to: env.MAIL_TO, replyTo: data.Correo.trim(), subject: `Solicitud de afiliación WAKI — ${data.Hotel.trim()}`, text: fields.map(key => `${key}: ${data[key].trim()}`).join('\n') + '\nAutorización de contacto: Sí' })
   if (result.accepted && !result.accepted.length) throw new Error('Recipient rejected')
   // A failed acknowledgement must not ask the hotel to submit the same application again.
   let confirmationSent = false
   try {
    const confirmation = await (sendMail || transporter.sendMail.bind(transporter))(partnerConfirmation(data, env.SMTP_USER))
    if (confirmation.accepted && !confirmation.accepted.length) throw new Error('Recipient rejected')
    confirmationSent = true
   } catch (error) {
    console.error('Partner confirmation failed:', error.code || 'SEND_FAILED')
   }
   res.json({ ok: true, confirmationSent })
  } catch (error) {
   console.error('Partner email failed:', error.code || 'SEND_FAILED')
   res.status(502).json({ message: 'No pudimos enviar tu solicitud. Inténtalo nuevamente o escríbenos a hola@wakipe.com.' })
  }
 })
 app.use('/api', (_req, res) => res.status(404).json({ message: 'Ruta no encontrada.' }))
 const dist = fileURLToPath(new URL('./dist', import.meta.url))
 app.use(express.static(dist))
 app.get('/{*path}', (_req, res) => res.sendFile(path.join(dist, 'index.html')))
 app.use((error, _req, res, _next) => res.status(error.status === 413 ? 413 : 400).json({ message: 'Solicitud no válida.' }))
 return app
}
createApp().listen(Number(process.env.PORT || 3000), '0.0.0.0')
