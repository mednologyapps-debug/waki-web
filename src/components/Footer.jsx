import { Instagram, Mail } from 'lucide-react'

const LOGO = 'https://raw.githubusercontent.com/mednologyapps-debug/waki-android/feature/android-map-style-v2/app/src/main/res/drawable/waki_logo_full.png'

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <img src={LOGO} alt="WAKI" className="footer-logo" />
          <p>Reserva hoteles por horas, fácil, seguro y desde tu celular.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="mailto:hola@wakipe.com" aria-label="Correo"><Mail size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>WAKI</h4>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#usuarios">Para ti</a>
            <a href="#seguridad">Seguridad</a>
          </div>
          <div>
            <h4>Hoteles</h4>
            <a href="#hoteles">Asocia tu hotel</a>
            <span>Portal para hoteles</span>
          </div>
          <div>
            <h4>Legal</h4>
            <span>Términos y condiciones</span>
            <span>Política de privacidad</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 WAKI. Todos los derechos reservados.</span>
        <span>Lima, Perú</span>
      </div>
    </footer>
  )
}
