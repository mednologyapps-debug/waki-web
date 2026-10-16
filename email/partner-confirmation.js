import { fileURLToPath } from 'node:url'
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))
export function partnerConfirmation(data, sender) {
 const hotel = escapeHtml(data.Hotel.trim())
 return {
  from: { name: 'WAKI', address: sender },
  to: data.Correo.trim(),
  replyTo: sender,
  subject: '¡Recibimos tu solicitud! Tu hotel está un paso más cerca de WAKI',
  text: '¡Recibimos tu solicitud!\n\nGracias por querer ser parte de WAKI. Recibimos los datos de tu hotel y nuestro equipo los revisará para ponerse en contacto contigo y conversar sobre la afiliación.\n\nEsta confirmación no significa que tu hotel ya esté afiliado.\n\n¿Tienes alguna consulta? Responde a este correo.\n\nEl equipo de WAKI\nhttps://wakipe.com',
  html: `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Recibimos tu solicitud · WAKI</title></head>
<body style="margin:0;padding:0;background:#f5f2fa;font-family:Arial,Helvetica,sans-serif;color:#282238;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">Gracias por querer ser parte de WAKI. Nuestro equipo se pondrá en contacto contigo.</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f2fa;"><tr><td align="center" style="padding:28px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:24px;overflow:hidden;">
<tr><td style="padding:30px 28px 22px;border-top:6px solid #7137e8;"><img src="cid:waki-logo" width="125" alt="WAKI" style="display:block;width:125px;max-width:100%;height:auto;border:0;"></td></tr>
<tr><td style="padding:0 28px;"><p style="margin:0 0 14px;color:#7137e8;font-size:12px;font-weight:bold;letter-spacing:2px;">TU HOTEL + WAKI</p><h1 style="margin:0;font-size:34px;line-height:1.15;letter-spacing:-1px;color:#7137e8;">¡Recibimos<br>tu solicitud!</h1><p style="margin:18px 0 0;font-size:17px;line-height:1.6;">Gracias por querer ser parte de WAKI.</p></td></tr>
<tr><td align="center" style="padding:12px 28px 0;"><img src="cid:waki-llama" width="250" alt="La llamita de WAKI te da la bienvenida" style="display:block;width:250px;max-width:100%;height:auto;border:0;"></td></tr>
<tr><td style="padding:8px 28px 28px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3edff;border-radius:16px;"><tr><td style="padding:22px;"><p style="margin:0 0 8px;font-size:12px;color:#655779;">SOLICITUD RECIBIDA PARA</p><p style="margin:0;font-size:20px;font-weight:bold;color:#7137e8;overflow-wrap:anywhere;">${hotel}</p></td></tr></table><h2 style="margin:26px 0 10px;font-size:21px;">¿Qué sigue ahora?</h2><p style="margin:0;font-size:16px;line-height:1.7;color:#5e576b;">Nuestro equipo revisará los datos de tu hotel y se pondrá en contacto contigo para conversar sobre la afiliación y los próximos pasos.</p><p style="margin:14px 0 24px;font-size:13px;line-height:1.6;color:#777080;">Esta confirmación es de recepción. Tu hotel aún no está afiliado a WAKI.</p><table role="presentation" cellpadding="0" cellspacing="0"><tr><td bgcolor="#7137e8" style="border-radius:12px;"><a href="https://wakipe.com" style="display:inline-block;padding:15px 25px;color:#ffffff;text-decoration:none;font-size:15px;font-weight:bold;">Conoce WAKI</a></td></tr></table><p style="margin:25px 0 0;font-size:15px;line-height:1.7;">¿Tienes alguna consulta? <a href="mailto:hola@wakipe.com" style="color:#7137e8;font-weight:bold;">Responde a este correo</a>. Estamos para ayudarte.</p><p style="margin:20px 0 0;font-size:15px;line-height:1.6;font-weight:bold;">El equipo de WAKI</p></td></tr>
<tr><td align="center" style="padding:20px 28px;background:#faf8fe;font-size:12px;line-height:1.7;color:#80758d;">Recibiste este correo porque se envió una solicitud de afiliación con tu dirección.<br><a href="https://wakipe.com" style="color:#7137e8;text-decoration:none;">wakipe.com</a></td></tr>
</table></td></tr></table></body></html>`,
  attachments: [
   { filename: 'waki-logo.png', path: fileURLToPath(new URL('./assets/logo.png', import.meta.url)), cid: 'waki-logo', contentDisposition: 'inline' },
   { filename: 'waki-llama.png', path: fileURLToPath(new URL('./assets/llama-hotel.png', import.meta.url)), cid: 'waki-llama', contentDisposition: 'inline' }
  ]
 }
}
