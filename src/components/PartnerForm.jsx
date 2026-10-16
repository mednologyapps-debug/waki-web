import { useState } from 'react'
import { Mail } from 'lucide-react'
import { partnershipEmail } from '../config'
export default function PartnerForm(){
 const [message,setMessage]=useState('')
 function submit(e){e.preventDefault();if(!partnershipEmail)return;const data=new FormData(e.currentTarget);const body=[...data.entries()].map(([k,v])=>`${k}: ${v}`).join('\n');window.location.href=`mailto:${partnershipEmail}?subject=${encodeURIComponent('Solicitud de afiliación WAKI — '+data.get('Hotel'))}&body=${encodeURIComponent(body)}`;setMessage('Se abrirá tu aplicación de correo con la solicitud. Revisa los datos y pulsa Enviar allí para completar el envío.')}
 return <form id="solicitud" className="partner-form" onSubmit={submit}><span className="section-label">HAGAMOS EQUIPO</span><h3 id="partner-form-title">Tu hotel también puede ser WAKI.</h3><p>Cuéntanos sobre tu hotel para conversar sobre la afiliación.</p><div className="form-grid">
 {[["Hotel","Nombre de tu hotel","text"],["Distrito","Distrito y ciudad","text"],["Contacto","Tu nombre y apellido","text"],["Teléfono","Número de contacto","tel"],["Correo","Correo de contacto","email"]].map(([name,placeholder,type])=><label key={name}>{name}<input name={name} type={type} placeholder={placeholder} required maxLength="160" autoComplete={type==='email'?'email':type==='tel'?'tel':'off'}/></label>)}
 <label>Habitaciones<input name="Habitaciones" type="number" min="1" max="10000" placeholder="Cantidad" required/></label></div><label>¿Algo más que debamos saber?<textarea name="Mensaje" rows="3" maxLength="1000" placeholder="Dirección, página web o una breve presentación…"/></label><label className="consent"><input name="Autorización de contacto" type="checkbox" value="Sí" required/>Autorizo a WAKI a contactarme sobre esta solicitud con los datos indicados.</label>
 {partnershipEmail?<><button className="btn btn-primary" type="submit"><Mail size={18}/>Preparar solicitud por correo</button><small>El envío se completa desde tu aplicación de correo.</small></>:<p className="form-notice" role="status">La recepción de solicitudes por correo estará disponible próximamente.</p>}
 {message&&<p className="form-notice" role="status">{message}</p>}</form>
}
