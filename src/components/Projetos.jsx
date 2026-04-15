import { projetos } from '../data/projetos.js'

export default function Projetos() {
  return (
    <section className="section section-dark" id="projetos">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="vertical-label light">Projetos</span>
          <span className="section-number light">04</span>
        </div>
        <div className="section-content-col">
          <h2 className="section-heading light">
            Projetos &<br />
            <em>Realizações</em>
          </h2>
          <div className="exp-list">
            {projetos.map((p) => (
              <div className="exp-item" data-reveal key={p.id}>
                <div className="exp-line"></div>
                <div className="exp-header">
                  <span className="exp-period">{p.numero}</span>
                  <h3>{p.titulo}</h3>
                </div>
                <p>{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
