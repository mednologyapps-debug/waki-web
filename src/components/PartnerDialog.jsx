import {track} from '../analytics'
import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import PartnerForm from './PartnerForm'
export default function PartnerDialog({open,onClose}){
 const dialog=useRef(null)
 const measured=useRef(false)
 useEffect(()=>{
  if(!open){measured.current=false;return}
  if(!measured.current){track('partner_open');measured.current=true}
  const element=dialog.current
  const previousOverflow=document.body.style.overflow
  element.showModal()
  document.body.style.overflow='hidden'
  return ()=>{element.close();document.body.style.overflow=previousOverflow}
 },[open])
 return <dialog ref={dialog} className="partner-dialog" aria-labelledby="partner-form-title" onCancel={e=>{e.preventDefault();onClose()}} onClick={e=>{if(e.target===e.currentTarget)onClose()}}><div className="partner-dialog-shell"><span className="partner-dialog-mascot" aria-hidden="true"><img src="/brand/llama-peek.webp" alt="" width="134" height="140"/></span><div className="partner-dialog-content"><button className="dialog-close" type="button" aria-label="Cerrar formulario" onClick={onClose}><X size={22}/></button><PartnerForm/></div></div></dialog>
}
