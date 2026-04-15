const items = [
  {
    periodo: 'Atual',
    titulo: 'Atuação Profissional',
    texto:
      'Experiência prática em ambiente corporativo, desenvolvendo competências de gestão, organização e relacionamento interpessoal.',
  },
  {
    periodo: 'Formação',
    titulo: 'Graduação',
    texto:
      'Formação acadêmica sólida, com foco no desenvolvimento de habilidades teóricas e práticas aplicáveis ao mercado de trabalho.',
  },
  {
    periodo: 'Contínuo',
    titulo: 'Desenvolvimento Profissional',
    texto:
      'Participação ativa em cursos, treinamentos e eventos que promovem atualização e aprimoramento de competências.',
  },
]

export default function Experiencia() {
  return (
    <section className="section section-dark" id="experiencia">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="vertical-label light">Trajetória</span>
          <span className="section-number light">02</span>
        </div>
        <div className="section-content-col">
          <h2 className="section-heading light">
            Experiência &<br />
            <em>Formação</em>
          </h2>
          <div className="exp-list">
            {items.map((it) => (
              <div className="exp-item" data-reveal key={it.titulo}>
                <div className="exp-line"></div>
                <div className="exp-header">
                  <span className="exp-period">{it.periodo}</span>
                  <h3>{it.titulo}</h3>
                </div>
                <p>{it.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
