import { useState } from 'react'
import { Mail } from 'lucide-react'

export default function PartnerForm(){
 const [message,setMessage]=useState('')
 const [sending,setSending]=useState(false)
 async function submit(e){
  e.preventDefault();if(sending)return
  const form=e.currentTarget;const data=Object.fromEntries(new FormData(form))
  setSending(true);setMessage('')
  try{
   const response=await fetch('/api/partner-request',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
   const result=await response.json()
   if(!response.ok)throw new Error(result.message||'No pudimos enviar tu solicitud. Inténtalo nuevamente.')
   setMessage(result.confirmationSent?'¡Recibimos tu solicitud! Te enviamos una confirmación por correo. Si no la ves, revisa spam.':'¡Recibimos tu solicitud! El equipo de WAKI se pondrá en contacto contigo.');form.reset()
  }catch(error){setMessage(error instanceof SyntaxError?'No pudimos conectar con el servicio de envío. Inténtalo nuevamente.':error.message)}
  finally{setSending(false)}
 }
 return <form id="solicitud" className="partner-form" onSubmit={submit}><h3 id="partner-form-title">Tu hotel también puede ser WAKI.</h3><p>Cuéntanos sobre tu hotel para conversar sobre la afiliación.</p><input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{display:'none'}}/><div className="form-grid">
 {[["Hotel","Nombre de tu hotel","text"],["Distrito","Distrito y ciudad","text"],["Contacto","Tu nombre y apellido","text"],["Teléfono","Número de contacto","tel"],["Correo","Correo de contacto","email"]].map(([name,placeholder,type])=><label key={name}>{name}<input name={name} type={type} placeholder={placeholder} required maxLength="160" autoComplete={type==='email'?'email':type==='tel'?'tel':'off'}/></label>)}
 </div><label className="consent"><input name="Autorización de contacto" type="checkbox" value="Sí" required/>Autorizo a WAKI a contactarme sobre esta solicitud con los datos indicados.</label>
 <button className="btn btn-primary" type="submit" disabled={sending} aria-busy={sending}><Mail size={18}/>{sending?'Enviando…':'Enviar solicitud'}</button>
 {message&&<p className="form-notice" role="status">{message}</p>}</form>
}
