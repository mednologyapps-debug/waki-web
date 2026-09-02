import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => goTo('inicio')} aria-label="Ir al inicio">
          <span className="brand-mark">W</span>
          <span>WAKI</span>
        </button>

        <nav className={`main-nav ${open ? 'open' : ''}`}>
          <button onClick={() => goTo('como-funciona')}>Cómo funciona</button>
          <button onClick={() => goTo('usuarios')}>Para usuarios</button>
          <button onClick={() => goTo('hoteles')}>Para hoteles</button>
          <button onClick={() => goTo('contacto')}>Contacto</button>
          <button className="btn btn-primary mobile-only" onClick={() => goTo('hoteles')}>
            Asocia tu hotel
          </button>
        </nav>

        <div className="header-actions">
          <button className="btn btn-soft" onClick={() => goTo('descarga')}>Descargar app</button>
          <button className="btn btn-primary" onClick={() => goTo('hoteles')}>Asocia tu hotel</button>
        </div>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
