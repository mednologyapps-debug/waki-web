import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Building2,
  Check,
  Clock3,
  Heart,
  Hotel,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  WalletCards
} from 'lucide-react'
import Header from '../components/Header'
import SearchCard from '../components/SearchCard'
import Footer from '../components/Footer'

const LLAMA = '/waki-llama.png'

const benefits = [
  { icon: Clock3, title: 'Tu tiempo', text: 'Elige las horas que realmente necesitas.' },
  { icon: MapPin, title: 'Cerca de ti', text: 'Descubre opciones por zona y ubicación.' },
  { icon: ShieldCheck, title: 'Reserva segura', text: 'Tu privacidad y tu reserva primero.' },
  { icon: Smartphone, title: 'Todo en tu celular', text: 'Reserva, revisa y gestiona sin vueltas.' }
]

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section id="inicio" className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <Sparkles size={15} />
                Hoteles por horas, sin tantas vueltas
              </div>

              <h1>
                Tu tiempo.<br />
                Tu escapada.<br />
                <span>A tu manera.</span>
              </h1>

              <p className="hero-lead">
                Encuentra hoteles disponibles cerca de ti, elige cuánto tiempo necesitas
                y reserva desde WAKI de forma fácil, rápida y segura.
              </p>

              <SearchCard />

              <div className="hero-proof">
                <span><Check size={15} /> Reserva por horas</span>
                <span><Check size={15} /> Disponibilidad clara</span>
                <span><Check size={15} /> Privacidad primero</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Vista previa de la app WAKI">
              <div className="mascot-aura" />
              <img className="hero-llama" src={LLAMA} alt="" aria-hidden="true" />

              <div className="phone-shell">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="app-topbar">
                    <span className="app-wordmark">WAKI</span>
                    <button className="round-control" aria-label="Filtros">
                      <span />
                      <span />
                      <span />
                    </button>
                  </div>

                  <div className="app-search"><MapPin size={17} /> ¿Por dónde nos escapamos?</div>

                  <div className="app-filter-row">
                    <span className="active">Hoteles</span>
                    <span>Por horas</span>
                    <span>Cerca de ti</span>
                  </div>

                  <div className="fake-map">
                    <div className="map-street s1" />
                    <div className="map-street s2" />
                    <div className="map-street s3" />
                    <div className="map-street s4" />
                    <span className="price-pin p1">S/45</span>
                    <span className="price-pin p2">S/60</span>
                    <span className="price-pin p3">S/52</span>
                    <span className="user-dot" />
                  </div>

                  <div className="hotel-float-card">
                    <div className="hotel-thumb">
                      <div className="hotel-window" />
                      <div className="hotel-bed" />
                    </div>
                    <div className="hotel-float-copy">
                      <small>Miraflores</small>
                      <strong>Hotel Boutique</strong>
                      <div className="rating">★ 4.8 <span>· desde S/60</span></div>
                    </div>
                    <button className="hotel-arrow" aria-label="Ver hotel"><ArrowRight size={18} /></button>
                  </div>

                  <div className="app-bottom-nav">
                    <span className="active-dot"><Hotel size={19} />Inicio</span>
                    <span><MapPin size={19} />Hoteles</span>
                    <span><BedDouble size={19} />Reservas</span>
                    <span><Heart size={19} />Perfil</span>
                  </div>
                </div>
              </div>

              <div className="floating-badge">
                <div className="floating-icon"><TimerReset size={22} /></div>
                <div><strong>Reserva flexible</strong><span>Desde 3 horas</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="section section-white">
          <div className="container">
            <div className="section-heading">
              <span className="section-label">ASÍ DE SIMPLE</span>
              <h2>Busca. Paga. Disfruta.</h2>
              <p>Tres pasos, sin colas y sin complicarte.</p>
            </div>

            <div className="steps-grid">
              <article className="step-card">
                <div className="step-icon"><MapPin /></div>
                <span className="step-number">01</span>
                <h3>Busca</h3>
                <p>Encuentra hoteles por zona, cercanía y disponibilidad.</p>
              </article>

              <article className="step-card featured-step">
                <div className="step-icon"><WalletCards /></div>
                <span className="step-number">02</span>
                <h3>Paga</h3>
                <p>Elige tu horario, revisa el resumen y confirma desde tu celular.</p>
              </article>

              <article className="step-card">
                <div className="step-icon"><BedDouble /></div>
                <span className="step-number">03</span>
                <h3>Disfruta</h3>
                <p>Llega con tu reserva lista y aprovecha tu tiempo a tu manera.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="usuarios" className="section experience-section">
          <div className="container">
            <div className="section-heading centered-heading">
              <span className="section-label">LA FORMA WAKI</span>
              <h2>Más momentos para ti.</h2>
              <p>Diseñamos WAKI para darte flexibilidad, claridad y control desde el primer toque.</p>
            </div>

            <div className="benefits-grid">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article className="benefit-card" key={title}>
                  <div className="benefit-icon"><Icon size={23} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className="story-card">
              <div className="story-copy">
                <span className="story-kicker">TU ESCAPADA, SIN VUELTAS</span>
                <h3>Encuentra el lugar ideal para ese plan que salió de la nada.</h3>
                <p>
                  Mira opciones disponibles, compara precios por horas y entra a tu reserva
                  sin perder tiempo llamando o preguntando en recepción.
                </p>
                <button className="btn btn-primary">Explorar WAKI <ArrowRight size={18} /></button>
              </div>

              <div className="mini-phone">
                <div className="mini-phone-header">
                  <span>Hoteles disponibles</span>
                  <small>Ver todos</small>
                </div>
                <div className="mini-hotel-card">
                  <div className="mini-hotel-image purple-room" />
                  <div><strong>Hotel Velmar</strong><span>Miraflores · 1.2 km</span><b>S/60</b></div>
                </div>
                <div className="mini-hotel-card">
                  <div className="mini-hotel-image coral-room" />
                  <div><strong>Urbano Express</strong><span>Lince · 2.5 km</span><b>S/45</b></div>
                </div>
                <div className="mini-hotel-card muted-card">
                  <div className="mini-hotel-image lilac-room" />
                  <div><strong>Vista City</strong><span>San Isidro · 3.1 km</span><b>S/52</b></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hoteles" className="section partner-section">
          <div className="container partner-grid">
            <div className="partner-copy">
              <div className="partner-badge"><Building2 size={17} /> PARA HOTELES</div>
              <h2>Convierte horas disponibles en nuevas reservas.</h2>
              <p>
                Publica tus habitaciones, administra horarios y controla reservas desde
                un portal pensado para la operación real de tu hotel.
              </p>

              <div className="partner-list">
                <span><BadgeCheck size={20} /> Configura habitaciones y tarifas por horas.</span>
                <span><Clock3 size={20} /> Gestiona disponibilidad y reservas en tiempo real.</span>
                <span><Hotel size={20} /> Controla tu operación desde un solo lugar.</span>
              </div>

              <button className="btn btn-light">Quiero afiliar mi hotel <ArrowRight size={18} /></button>
            </div>

            <div className="portal-window">
              <div className="portal-top">
                <div><span className="portal-dot" /><span className="portal-dot" /><span className="portal-dot" /></div>
                <strong>WAKI Hoteles</strong>
                <span>Hoy</span>
              </div>

              <div className="portal-body">
                <div className="portal-sidebar">
                  <span className="selected" />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="portal-content">
                  <div className="portal-title-row"><div><small>Resumen</small><h4>Tu hotel hoy</h4></div><button>+ Nueva tarifa</button></div>
                  <div className="metric-grid">
                    <article><small>Reservas</small><strong>18</strong><em>+12%</em></article>
                    <article><small>Ocupación</small><strong>76%</strong><em>Hoy</em></article>
                    <article><small>Ingresos</small><strong>S/1,890</strong><em>Hoy</em></article>
                  </div>
                  <div className="portal-chart">
                    <div className="chart-copy"><strong>Ingresos</strong><span>Últimos 7 días</span></div>
                    <svg viewBox="0 0 440 120" role="img" aria-label="Gráfico de crecimiento">
                      <path d="M0 95 C55 90, 55 62, 100 68 S170 95, 220 55 S300 28, 350 45 S405 70, 440 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                      <path d="M0 95 C55 90, 55 62, 100 68 S170 95, 220 55 S300 28, 350 45 S405 70, 440 24 L440 120 L0 120 Z" fill="url(#chartFill)" opacity=".25"/>
                      <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="currentColor"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs>
                    </svg>
                  </div>
                  <div className="reservation-row"><span className="reservation-avatar">V</span><div><strong>Velmar Deluxe</strong><small>16:00 – 20:00 · 4 horas</small></div><b>Confirmada</b></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="seguridad" className="section security-section">
          <div className="container security-grid">
            <div className="security-visual">
              <div className="lock-orb"><LockKeyhole size={54} /></div>
              <img src={LLAMA} alt="" aria-hidden="true" />
            </div>

            <div className="security-copy">
              <span className="section-label">PRIVACIDAD PRIMERO</span>
              <h2>Tu reserva es tuya.</h2>
              <p>
                WAKI está pensado para que reserves con tranquilidad, con información clara
                y acceso a los datos de tu estadía desde tu celular.
              </p>
              <div className="security-points">
                <span><ShieldCheck size={20} /> Acceso protegido a tu reserva.</span>
                <span><LockKeyhole size={20} /> Información personal tratada con privacidad.</span>
                <span><BadgeCheck size={20} /> Hoteles y disponibilidad administrados desde la plataforma.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="descarga" className="section download-section">
          <div className="container download-card">
            <div className="download-copy">
              <span className="section-label light-label">DESCARGA WAKI</span>
              <h2>Tu próxima escapada empieza en tu celular.</h2>
              <p>Busca, reserva y gestiona tu estadía desde una sola app.</p>
              <div className="download-actions">
                <button className="store-pill"><Smartphone size={22} /><span><small>Próximamente</small>Android</span></button>
                <button className="btn btn-white">Quiero saber más</button>
              </div>
            </div>

            <div className="download-mark">
              <span className="big-pin"><MapPin size={50} /></span>
              <span className="download-word">WAKI</span>
              <small>MÁS MOMENTOS PARA TI</small>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
