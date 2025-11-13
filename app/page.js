const WHATSAPP_LINK = "https://wa.me/19083431845";
const EMAIL = "costaricaruns2025@gmail.com";         // Email principal
const OWNER_EMAIL = "nblanco1968@gmail.com";         // Email secundario
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
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)"
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
                Servicio familiar con 2 viajes al mes desde Estados Unidos. Tú
                compras online, nosotros traemos tus paquetes y los entregamos
                en Costa Rica.
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
                Puedes comprar tú mismo y enviarlo a nuestra dirección en USA, o
                nosotros lo compramos por ti.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-title">Viajamos y entregamos</div>
              <p className="step-text">
                Llevamos tus compras en maletas en nuestros viajes quincenales y
                coordinamos la entrega en Costa Rica.
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
              Precios claros y sin sorpresas. Siempre confirmamos el monto antes
              del viaje.
            </p>
          </div>

          <div className="tarifas-grid">
            <div className="card">
              <h3>Tarifa por libra*</h3>
              <div className="price-highlight">$12 / lb</div>
              <p className="price-note">
                *Tarifa de ejemplo. Puedes ajustarla después según tus costos.
              </p>
              <ul className="list-check">
                <li>Transporte USA → Costa Rica en maleta</li>
                <li>Ideal para ropa, zapatos y electrónicos pequeños</li>
                <li>Cotización previa por WhatsApp o Messenger</li>
              </ul>
            </div>

            <div className="card">
              <h3>Servicio de compra (opcional)</h3>
              <p className="small">Si quieres que compremos por ti:</p>
              <ul className="list-check">
                <li>Comisión sugerida del 8% sobre el valor de la compra</li>
                <li>Pago adelantado o contra comprobante</li>
                <li>Te enviamos factura, número de orden y seguimiento</li>
              </ul>
              <p className="small" style={{ marginTop: "10px" }}>
                Algunos productos pueden pagar impuestos adicionales al entrar a
                Costa Rica. Siempre te avisamos antes de confirmar.
              </p>
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
              Viajamos dos veces al mes. Tus compras se programan para el
              siguiente viaje disponible.
            </p>
          </div>

          <div className="fechas-grid">
            <div className="card">
              <div className="badge-soft">Frecuencia</div>
              <h3>2 viajes al mes</h3>
              <p className="small">
                Servicio quincenal para que puedas planificar tus compras.
              </p>
            </div>
            <div className="card">
              <div className="badge-soft">Cortes de pedidos</div>
              <h3>Día 10 y 25 de cada mes</h3>
              <p className="small">
                Después del corte, las nuevas compras pasan al próximo viaje.
              </p>
            </div>
            <div className="card">
              <div className="badge-soft">Capacidad por viaje</div>
              <h3>300–400 lb aprox.</h3>
              <p className="small">
                Dos personas viajando con varias maletas. Cupos limitados.
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
              <div className="faq-q">¿Qué tipo de productos pueden traer?</div>
              <div className="faq-a">
                Principalmente ropa, zapatos, accesorios, electrónicos pequeños
                y artículos de hogar. No manejamos productos ilegales, químicos
                peligrosos ni mercancía restringida por aerolíneas.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">¿Cuánto tarda en llegar mi pedido?</div>
              <div className="faq-a">
                Depende de la fecha del próximo viaje. En promedio, entre 7 y 20
                días desde que el producto llega a nuestra dirección en USA.
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">¿Cómo se realiza el pago?</div>
              <div className="faq-a">
                Aceptamos pagos en dólares o colones. Se puede coordinar
                transferencia bancaria, SINPE, Zelle, CashApp u otros métodos
                según el caso.
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
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +1 908 343 1845
                  </a>
                </p>
                <p>
                  <strong>Messenger:</strong>{" "}
                  <a
                    href={MESSENGER}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Liberty Store (Costa Rica)
                  </a>
                </p>
                <p>
                  <strong>Facebook:</strong>{" "}
                  <a
                    href={FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Liberty Store
                  </a>
                </p>
                <p>
                  <strong>Email principal:</strong>{" "}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </p>
                <p>
                  <strong>Email administración:</strong>{" "}
                  <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>
                </p>
              </div>

              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap"
                }}
              >
                <a
                  href={WHATSAPP_LINK}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribir por WhatsApp
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
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            ·{" "}
            <a
              href={MESSENGER}
              target="_blank"
              rel="noopener noreferrer"
            >
              Messenger
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
