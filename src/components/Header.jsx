import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const LOGO = 'https://raw.githubusercontent.com/mednologyapps-debug/waki-android/feature/android-map-style-v2/app/src/main/res/drawable/waki_logo_full.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={() => goTo('inicio')} aria-label="WAKI - Ir al inicio">
          <img src={LOGO} alt="WAKI" />
        </button>

        <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Navegación principal">
          <button onClick={() => goTo('como-funciona')}>Cómo funciona</button>
          <button onClick={() => goTo('usuarios')}>Para ti</button>
          <button onClick={() => goTo('hoteles')}>Para hoteles</button>
          <button onClick={() => goTo('seguridad')}>Seguridad</button>
          <button className="nav-cta mobile-only" onClick={() => goTo('descarga')}>Descargar WAKI</button>
        </nav>

        <div className="header-actions">
          <button className="text-action">Iniciar sesión</button>
          <button className="btn btn-primary" onClick={() => goTo('descarga')}>Descargar WAKI</button>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  )
}
