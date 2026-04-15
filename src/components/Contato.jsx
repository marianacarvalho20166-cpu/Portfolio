export default function Contato() {
  return (
    <section className="section section-dark" id="contato">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="vertical-label light">Contato</span>
          <span className="section-number light">05</span>
        </div>
        <div className="section-content-col">
          <h2 className="section-heading light">
            Vamos<br />
            <em>conversar?</em>
          </h2>
          <p className="contact-intro">
            Estou disponível para novas oportunidades e conexões profissionais. Entre em contato:
          </p>
          <div className="contact-grid">
            <a
              href="mailto:marianacarvalho20166@gmail.com"
              className="contact-item"
              data-reveal
            >
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info">
                <span className="contact-label">E-mail</span>
                <span className="contact-value">marianacarvalho20166@gmail.com</span>
              </div>
              <i className="fas fa-arrow-up-right-from-square contact-arrow"></i>
            </a>
            <a
              href="https://github.com/marianacarvalho20166-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
              data-reveal
            >
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-info">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">marianacarvalho20166-cpu</span>
              </div>
              <i className="fas fa-arrow-up-right-from-square contact-arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
