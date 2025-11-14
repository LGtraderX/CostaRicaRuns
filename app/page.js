const WHATSAPP_LINK = "https://wa.me/19083431845";
const EMAIL = "costaricaruns2025@gmail.com"; // Email principal
const OWNER_EMAIL = "nblanco1968@gmail.com"; // Email secundario
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
            <a href="#inicio" className="logo">
              <img
                src="/logo.png"
                alt="CostaRicaRuns logo"
                style={{
                  height: "44px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
              <span>CostaRicaRuns</span>
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
              rel="noopener noreferrer"
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
                Servicio familiar con 2 viajes al mes desde Estados Unidos. Tú compras online,
                nosotros traemos tus paquetes y los entregamos en Costa Rica.
              </p>

              <div className="hero-actions">
                <a
                  href={WHATSAPP_LINK}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotizar por WhatsApp
                </a>

                <a
                  href={MESSENGER}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chatear por Messenger
                </a>
              </div>

              <div className="hero-meta">
                <span>
                  <span className="dot" /> 2 viajes al mes · 2 personas
                </span>
                <span>Pago en dólares o colones</span>
              </div>
            </div>

            {/* HERO CARD */}
            <aside className="hero-card">
              <div className="hero-card-title">Capacidad y viajes</div>

              <div className="hero-card-grid">
                <div className="hero-stat">
                  <div className="hero-stat-label">Viajes al mes</div>
                  <div className="hero-stat-value">2</div>
                  <div className="small">Servicio quincenal</div>
                </div>

                <div className="hero-stat">
                  <div className="hero-stat-label">Personas viajando</div>
                  <div className="hero-stat-value">2</div>
                  <div className="small">Más maletas · Más libras</div>
                </div>

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
                Comparte el link del producto que quieres comprar en Amazon, tienda online o web.
              </p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-title">Cotizamos el envío</div>
              <p className="step-text">Te indicamos el precio por libra y el costo total estimado.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-title">Compra o envía a nuestra dirección</div>
              <p className="step-text">
                Puedes enviar a nuestra dirección en USA o nosotros lo compramos por ti.
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
              Precios claros y sin sorpresas. Confirmamos el monto antes del viaje.
            </p>
          </div>

          <div className="tarifas-grid">
            <div className="card">
              <h3>Tarifa por libra*</h3>
              <div className="price-highlight">$12 / lb</div>
              <p className="price-note">*Tarifa base — puedes ajustarla cuando quieras.</p>

              <ul className="list-check">
                <li>Transporte USA → Costa Rica en maleta</li>
                <li>Ideal para ropa y electrónicos pequeños</li>
                <li>Cotización por WhatsApp o Messenger</li>
              </ul>
            </div>

            <div className="card">
              <h3>Servicio de compra</h3>
              <p className="small">Si quieres que compremos por ti:</p>

              <ul className="list-check">
                <li>Comisión sugerida del 8%</li>
                <li>Pago adelantado o contra comprobante</li>
                <li>Enviamos factura y seguimiento</li>
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
              Viajamos dos veces al mes. Tus compras se programan al siguiente viaje disponible.
            </p>
          </div>

          <div className="fechas-grid">
            <div className="card">
              <div className="badge-soft">Frecuencia</div>
              <h3>2 viajes al mes</h3>
              <p className="small">Servicio quincenal programado.</p>
            </div>

            <div className="card">
              <div className="badge-soft">Cortes</div>
              <h3>Día 10 y 25</h3>
              <p className="small">Después del corte pasa al próximo viaje.</p>
            </div>

            <div className="card">
              <div className="badge-soft">Capacidad</div>
              <h3>300–400 lb</h3>
              <p className="small">
                Dependiendo de número de maletas y aerolínea.
              </p>
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
              <div className="faq-q">¿Qué productos pueden traer?</div>
              <div className="faq-a">
                Ropa, zapatos, accesorios, electrónicos pequeños y artículos de hogar.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">¿Cuánto tarda?</div>
              <div className="faq-a">
                7–20 días desde que llega a nuestra dirección en USA.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">¿Formas de pago?</div>
              <div className="faq-a">
                Colones, dólares, SINPE, Zelle, CashApp, transferencia.
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
              Escríbenos por WhatsApp o Messenger para cotizar tu envío.
            </p>
          </div>

          <div className="contact-grid">
            <div>
              <div className="contact-chip">
                📦 Servicio familiar · 2 viajeros · 2 viajes al mes
              </div>

              <div className="contact-details">
                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a href={WHATSAPP_LINK} target="_blank">
                    +1 908 343 1845
                  </a>
                </p>

                <p>
                  <strong>Messenger:</strong>{" "}
                  <a href={MESSENGER} target="_blank">
                    Liberty Store (Costa Rica)
                  </a>
                </p>

                <p>
                  <strong>Facebook:</strong>{" "}
                  <a href={FACEBOOK} target="_blank">
                    Liberty Store
                  </a>
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>

                <p>
                  <strong>Admin:</strong>{" "}
                  <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>
                </p>
              </div>

              <div style={{ marginTop: "10px", display: "flex", gap: "8px", flexWrap: "wrap" }}>
                <a href={WHATSAPP_LINK} className="btn btn-primary" target="_blank">
                  WhatsApp
                </a>
                <a href={MESSENGER} className="btn btn-outline" target="_blank">
                  Messenger
                </a>
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
            Sitio web operado por Liberty Store ·{" "}
            <a href={FACEBOOK} target="_blank">Facebook</a>{" "}
            ·{" "}
            <a href={MESSENGER} target="_blank">Messenger</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
