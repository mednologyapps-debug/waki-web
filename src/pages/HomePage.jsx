import {
  ArrowRight, BadgeCheck, Building2, CheckCircle2, Clock3, Hotel,
  MapPinned, ShieldCheck, Smartphone, Sparkles, UsersRound
} from 'lucide-react'
import Header from '../components/Header'
import SearchCard from '../components/SearchCard'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={16} /> Reserva diferente</div>
              <h1>Reserva hoteles por horas,<span> sin tantas vueltas.</span></h1>
              <p className="hero-lead">Encuentra un hotel cerca de ti, elige cuánto tiempo necesitas y reserva desde WAKI de forma rápida y flexible.</p>
              <SearchCard />
              <div className="trust-row">
                <span><ShieldCheck size={18} /> Reserva segura</span>
                <span><Clock3 size={18} /> Horarios flexibles</span>
                <span><MapPinned size={18} /> Hoteles cerca de ti</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Vista previa de WAKI">
              <div className="hero-orbit orbit-one"></div>
              <div className="hero-orbit orbit-two"></div>
              <div className="phone-card">
                <div className="phone-top"><span className="mini-logo">W</span><span>WAKI</span></div>
                <div className="phone-content">
                  <span className="phone-kicker">Cerca de ti</span>
                  <h3>Hotel Velmar Boutique</h3>
                  <p>Miraflores · Disponible ahora</p>
                  <div className="hotel-preview"></div>
                  <div className="phone-bottom">
                    <div><small>Desde</small><strong>S/ 60</strong></div>
                    <button>Ver hotel</button>
                  </div>
                </div>
              </div>
              <div className="llama-card"><div className="llama-face">🦙</div><strong>Tu tiempo, a tu manera.</strong></div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section section-white">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">CÓMO FUNCIONA</span>
              <h2>Reservar con WAKI es simple</h2>
              <p>Tres pasos y listo.</p>
            </div>
            <div className="steps-grid">
              <article className="step-card"><div className="step-number">01</div><MapPinned size={28} /><h3>Encuentra</h3><p>Busca hoteles disponibles por zona, distrito o cercanía.</p></article>
              <article className="step-card"><div className="step-number">02</div><Clock3 size={28} /><h3>Elige tus horas</h3><p>Selecciona la duración, fecha y hora que mejor te convengan.</p></article>
              <article className="step-card"><div className="step-number">03</div><BadgeCheck size={28} /><h3>Reserva</h3><p>Confirma tu reserva y accede a toda la información desde WAKI.</p></article>
            </div>
          </div>
        </section>

        <section id="usuarios" className="section">
          <div className="container split-grid">
            <div>
              <span className="section-label">PARA USUARIOS</span>
              <h2>Más libertad para reservar.</h2>
              <p className="section-copy">WAKI está pensado para quienes necesitan flexibilidad, privacidad y una experiencia mucho más simple que una reserva tradicional.</p>
              <div className="check-list">
                <span><CheckCircle2 /> Reserva por 2, 4, 6 o más horas.</span>
                <span><CheckCircle2 /> Consulta disponibilidad antes de llegar.</span>
                <span><CheckCircle2 /> Administra tus reservas desde la app.</span>
                <span><CheckCircle2 /> Acumula WAKI Points con tus estadías.</span>
              </div>
            </div>
            <div className="feature-panel">
              <div className="feature-icon"><Smartphone size={30} /></div>
              <h3>Todo desde tu celular</h3>
              <p>Próximas reservas, estadías en curso, tiempo restante, favoritos y beneficios en un solo lugar.</p>
              <div className="mini-stats">
                <div><strong>2h+</strong><span>Reservas flexibles</span></div>
                <div><strong>24/7</strong><span>Consulta disponible</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="hoteles" className="section partner-section">
          <div className="container partner-grid">
            <div className="partner-copy">
              <span className="section-label light-label">PARA HOTELES</span>
              <h2>Convierte horas disponibles en nuevas reservas.</h2>
              <p>Afiliar tu hotel a WAKI te permitirá ofrecer disponibilidad por horas, administrar reservas y llegar a nuevos huéspedes desde una sola plataforma.</p>
              <div className="partner-points">
                <span><Building2 size={20} /> Gestiona habitaciones y tarifas.</span>
                <span><UsersRound size={20} /> Recibe nuevas reservas.</span>
                <span><Hotel size={20} /> Controla disponibilidad desde tu portal.</span>
              </div>
              <button className="btn btn-light">Asocia tu hotel <ArrowRight size={18} /></button>
            </div>

            <div className="dashboard-preview">
              <div className="dashboard-header"><strong>Portal WAKI Hoteles</strong><span>Vista previa</span></div>
              <div className="dashboard-metrics">
                <article><span>Reservas hoy</span><strong>18</strong></article>
                <article><span>Habitaciones</span><strong>24</strong></article>
                <article><span>Ocupación</span><strong>76%</strong></article>
              </div>
              <div className="booking-row"><span className="status-dot"></span><div><strong>WK-9014</strong><small>Estadía en curso · hasta 18:00</small></div><span className="status-pill">Activa</span></div>
              <div className="booking-row"><span className="status-dot purple"></span><div><strong>WK-8821</strong><small>Próxima reserva · 18:00</small></div><span className="status-pill soft">Confirmada</span></div>
            </div>
          </div>
        </section>

        <section id="descarga" className="section section-white">
          <div className="container cta-card">
            <div><span className="section-label">WAKI APP</span><h2>Tu próxima estadía empieza aquí.</h2><p>Estamos construyendo WAKI para Android y próximamente iOS.</p></div>
            <div className="cta-actions">
              <button className="store-button"><Smartphone size={24} /><span><small>Próximamente en</small>Android</span></button>
              <button className="btn btn-primary">Quiero saber más</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
