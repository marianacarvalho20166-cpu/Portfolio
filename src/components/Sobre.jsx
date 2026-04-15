const blocks = [
  {
    n: '01',
    titulo: 'Perfil',
    texto:
      'Sou Mariana Gomes Carvalho, uma profissional que valoriza a postura ética, o comprometimento e a busca por resultados. Com perfil corporativo e determinado, encaro cada desafio como uma oportunidade de crescimento.',
  },
  {
    n: '02',
    titulo: 'Visão',
    texto:
      'Acredito que a combinação de competência técnica e inteligência emocional é essencial para alcançar o sucesso profissional. Busco ambientes que valorizem a meritocracia e o trabalho em equipe.',
  },
  {
    n: '03',
    titulo: 'Motivação',
    texto:
      'Minha motivação é contribuir de forma significativa nas organizações em que atuo, trazendo soluções práticas e inovadoras para os desafios do dia a dia.',
  },
]

export default function Sobre() {
  return (
    <section className="section" id="sobre">
      <div className="section-grid">
        <div className="section-label-col">
          <span className="vertical-label">Sobre mim</span>
          <span className="section-number">01</span>
        </div>
        <div className="section-content-col">
          <h2 className="section-heading">
            Dedicação e<br />
            <em>profissionalismo</em>
          </h2>
          <div className="about-blocks">
            {blocks.map((b) => (
              <div className="about-block" data-reveal key={b.n}>
                <div className="block-number">{b.n}</div>
                <h3>{b.titulo}</h3>
                <p>{b.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
