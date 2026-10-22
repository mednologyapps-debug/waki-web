export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">W</span>
            <span>WAKI</span>
          </div>
          <p>Hoteles por horas, de forma simple, rápida y flexible.</p>
        </div>
        <div>
          <h4>WAKI</h4>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#usuarios">Para usuarios</a>
          <a href="#hoteles">Para hoteles</a>
        </div>
        <div>
          <h4>Legal</h4>
          <a href="/legal.html#terms">Términos y condiciones</a>
          <a href="/legal.html#privacy">Privacidad y datos</a>
          <a href="/legal.html#cancellations">Cancelaciones y reembolsos</a>
          <a href="/legal.html#contact">Reclamos</a>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href="mailto:soporte@wakipe.com">soporte@wakipe.com</a>
          <a href="mailto:reclamos@wakipe.com">reclamos@wakipe.com</a>
          <span>Lima, Perú</span>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 WAKI. Todos los derechos reservados.</div>
    </footer>
  )
}
