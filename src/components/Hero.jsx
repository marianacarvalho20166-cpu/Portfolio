export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-label">Portfólio Profissional</div>
          <h1 className="hero-title">
            Mariana<br />
            Gomes<br />
            <em>Carvalho</em>
          </h1>
          <p className="hero-subtitle">
            Profissional comprometida com excelência e resultados. Postura corporativa, visão
            estratégica e foco no crescimento contínuo.
          </p>
          <div className="hero-cta">
            <a href="#contato" className="cta-btn">
              Entrar em contato
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#sobre" className="cta-link">
              Saiba mais <span className="line"></span>
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="photo-container">
            <div className="photo-accent"></div>
            <img src="/perfil.jpg" alt="Mariana Gomes Carvalho" className="hero-photo" />
            <div className="photo-tag">
              <span className="tag-dot"></span>
              Disponível para oportunidades
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <span>scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  )
}
