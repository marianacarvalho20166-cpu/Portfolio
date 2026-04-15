import { useState, useEffect } from 'react'

const navItems = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className="side-nav" id="sideNav">
        <div className="side-nav-top">
          <span className="monogram">MG</span>
        </div>
        <ul className="side-nav-links">
          {navItems.map((n, i) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={`nav-dot${i === 0 ? ' active' : ''}`}
                data-label={n.label}
              >
                <span></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="side-nav-bottom">
          <a href="mailto:marianacarvalho20166@gmail.com" className="side-icon">
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://github.com/marianacarvalho20166-cpu"
            target="_blank"
            rel="noopener noreferrer"
            className="side-icon"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </nav>

      <header className="mobile-header" id="mobileHeader">
        <span className="monogram">MG</span>
        <button
          className={`hamburger${open ? ' active' : ''}`}
          id="hamburger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`} id="mobileMenu">
        <ul>
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={close}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
