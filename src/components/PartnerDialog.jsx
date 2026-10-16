import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import PartnerForm from './PartnerForm'
export default function PartnerDialog({open,onClose}){
 const dialog=useRef(null)
 useEffect(()=>{
  if(!open)return
  const element=dialog.current
  const previousOverflow=document.body.style.overflow
  element.showModal()
  document.body.style.overflow='hidden'
  return ()=>{element.close();document.body.style.overflow=previousOverflow}
 },[open])
 return <dialog ref={dialog} className="partner-dialog" aria-labelledby="partner-form-title" onCancel={e=>{e.preventDefault();onClose()}} onClick={e=>{if(e.target===e.currentTarget)onClose()}}><div className="partner-dialog-content"><button className="dialog-close" type="button" aria-label="Cerrar formulario" onClick={onClose}><X size={22}/></button><PartnerForm/></div></dialog>
}
