const WHATSAPP_LINK = "https://wa.me/19083431845";
const EMAIL = "costaricaruns2025@gmail.com"; 
const OWNER_EMAIL = "nblanco1968@gmail.com"; 
const FACEBOOK = "https://www.facebook.com/libertystorecutris";
const MESSENGER = "https://m.me/libertystorecutris";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div>
      {/* NAVBAR */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#inicio" className="logo-wrapper">
              <img
                src="/logo.png"
                alt="CostaRicaRuns logo"
                className="logo-img"
              />
            </a>

            <div className="nav-links">
              <a href="#como-funciona">Cómo funciona</a>
              <a href="#tarifas">Tarifas</a>
              <a href="#fechas">Fechas</a>
              <a href="#faq">Preguntas</a>
              <a href="#contacto">Contacto</a>
            </div>

            <a
              className="btn btn-primary nav-cta"
              href={WHATSAPP_LINK}
              target="_blank"
            >
              WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main id="inicio" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-tag">
                <span className="dot" />
                Envíos personales USA → Costa Rica
              </div>

              <h1 className="hero-title">
                Traemos tus compras de USA a Costa Rica, sin complicaciones.
              </h1>

              <p className="hero-subtitle">
                Servicio familiar con viajes constantes desde Estados Unidos.
                Tú compras online, nosotros traemos tus paquetes y los 
                entregamos en Costa Rica.
              </p>

              <div className="hero-actions">
                <a
                  href={WHATSAPP_LINK}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Cotizar por WhatsApp
                </a>

                <a
                  href={MESSENGER}
                  className="btn btn-outline"
                  target="_blank"
                >
                  Chatear por Messenger
                </a>
              </div>
            </div>

            {/* HERO CARD */}
            <aside className="hero-card">
              <div className="hero-card-title">Capacidad y viajes</div>

              <div className="hero-card-grid">
                <div className="hero-stat">
                  <div className="hero-stat-label">Capacidad total</div>
                  <div className="hero-stat-value">300–400 lb</div>
                  <div className="small">Según aerolínea y maletas</div>
                </div>

                <div className="hero-stat">
                  <div className="hero-stat-label">Ruta</div>
                  <div className="hero-stat-value">USA → San José</div>
                  <div className="small">
                    Entrega principal en Gran Área Metropolitana
                  </div>
                </div>
              </div>

              <div className="hero-badge">
                Cupos limitados por viaje. Reserva con anticipación.
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Cómo funciona CostaRicaRuns</h2>
            <p className="section-subtitle">
              Un proceso rápido y simple para traer tus compras de USA.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-title">Envíanos el enlace</div>
              <p className="step-text">
                Comparte el link del producto que quieres comprar en Amazon,
                tienda online o web en USA.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-title">Cotizamos el envío</div>
              <p className="step-text">
                Te indicamos el precio por libra y el costo total estimado.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-title">Compra o envía a nuestra dirección</div>
              <p className="step-text">
                Puedes comprar tú mismo o enviarlo a nuestra dirección en USA.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-title">Viajamos y entregamos</div>
              <p className="step-text">
                Llevamos tus compras y coordinamos la entrega en Costa Rica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFAS */}
      <section id="tarifas">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tarifas y condiciones</h2>
            <p className="section-subtitle">
              Precios claros, simples y sin sorpresas.
            </p>
          </div>

          <div className="tarifas-grid">
            <div className="card">
              <h3>Tarifa por libra</h3>
              <div className="price-highlight">$12 / lb</div>

              <ul className="list-check">
                <li>Transporte en maleta USA → Costa Rica</li>
                <li>Ideal para ropa y artículos pequeños</li>
                <li>Cotización por WhatsApp o Messenger</li>
              </ul>
            </div>

            <div className="card">
              <h3>Servicio de compra</h3>
              <ul className="list-check">
                <li>Comisión sugerida del 8%</li>
                <li>Pago adelantado o contra comprobante</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FECHAS */}
      <section id="fechas">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Fechas de viaje y cortes</h2>
            <p className="section-subtitle">
              Organizamos tus pedidos según disponibilidad.
            </p>
          </div>

          <div className="fechas-grid">
            <div className="card">
              <h3>Viajes frecuentes</h3>
              <p className="small">Salidas constantes desde USA.</p>
            </div>

            <div className="card">
              <h3>Cortes flexibles</h3>
              <p className="small">Pregúntanos por WhatsApp.</p>
            </div>

            <div className="card">
              <h3>Capacidad</h3>
              <p className="small">300–400 lb por viaje.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Preguntas frecuentes</h2>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-q">¿Qué pueden traer?</div>
              <div className="faq-a">
                Ropa, zapatos, accesorios, electrónicos pequeños, artículos de hogar y más.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">¿Cuánto tarda?</div>
              <div className="faq-a">
                De 7 a 20 días desde que llega a USA.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">¿Formas de pago?</div>
              <div className="faq-a">
                Colones, dólares, SINPE, Zelle, CashApp y transferencia.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contacto y pedidos</h2>
            <p className="section-subtitle">
              Escríbenos para cotizar tu envío.
            </p>
          </div>

          <div className="contact-grid">
            <div>
              <div className="contact-chip">
                📦 Servicio familiar · Entregas confiables
              </div>

              <div className="contact-details">
                <p><strong>WhatsApp:</strong> <a href={WHATSAPP_LINK}>+1 908 343 1845</a></p>
                <p><strong>Messenger:</strong> <a href={MESSENGER}>Liberty Store</a></p>
                <p><strong>Facebook:</strong> <a href={FACEBOOK}>Liberty Store</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
                <p><strong>Admin:</strong> <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a></p>
              </div>

              <div className="contact-buttons">
                <a href={WHATSAPP_LINK} className="btn btn-primary">WhatsApp</a>
                <a href={MESSENGER} className="btn btn-outline">Messenger</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>© {year} CostaRicaRuns. Todos los derechos reservados.</p>
          <p>
            Operado por Liberty Store ·{" "}
            <a href={FACEBOOK}>Facebook</a> ·{" "}
            <a href={MESSENGER}>Messenger</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
