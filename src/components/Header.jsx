import { Menu, X } from 'lucide-react'
import { useState } from 'react'
export default function Header({onRegister}) {
 const [open,setOpen]=useState(false)
 return <header className="site-header"><div className="container header-inner">
 <a href="#inicio" className="brand" aria-label="WAKI, inicio"><img src="/brand/logo.webp" alt="WAKI" width="150" height="72" /></a>
 <nav id="mobile-navigation" aria-label="Navegación principal" className={open?'main-nav open':'main-nav'} onClick={()=>setOpen(false)}>
 <a href="#como-funciona">Cómo funciona</a><a href="#hoteles">Para hoteles</a><a href="#preguntas">Preguntas</a></nav>
 <button className="btn btn-primary header-cta" type="button" onClick={()=>{setOpen(false);onRegister()}}>Registra tu hotel</button>
 <button className="menu-toggle" aria-label={open?'Cerrar menú':'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div></header>
}
