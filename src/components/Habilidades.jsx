const skills = [
  { nome: 'Liderança', valor: 90 },
  { nome: 'Gestão de Tempo', valor: 85 },
  { nome: 'Comunicação', valor: 95 },
  { nome: 'Trabalho em Equipe', valor: 92 },
  { nome: 'Informática', valor: 75 },
  { nome: 'Organização', valor: 88 },
]

export default function Habilidades() {
  return (
    <section className="section" id="habilidades">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="vertical-label">Competências</span>
          <span className="section-number">03</span>
        </div>
        <div className="section-content-col">
          <h2 className="section-heading">
            Habilidades<br />
            <em>& Competências</em>
          </h2>
          <div className="skills-list">
            {skills.map((s) => (
              <div className="skill-row" data-reveal key={s.nome}>
                <div className="skill-name">{s.nome}</div>
                <div className="skill-bar-track">
                  <div className="skill-bar-fill" data-width={s.valor}></div>
                </div>
                <div className="skill-value">{s.valor}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
