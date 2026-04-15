import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Experiencia from './components/Experiencia.jsx'
import Habilidades from './components/Habilidades.jsx'
import Projetos from './components/Projetos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    // Cursor dot
    const cursorDot = document.getElementById('cursorDot')
    const hasHover = window.matchMedia('(hover: hover)').matches
    const onMove = (e) => {
      if (!cursorDot) return
      cursorDot.style.left = e.clientX - 6 + 'px'
      cursorDot.style.top = e.clientY - 6 + 'px'
    }
    const enter = () => {
      if (!cursorDot) return
      cursorDot.style.transform = 'scale(3)'
      cursorDot.style.opacity = '0.5'
    }
    const leave = () => {
      if (!cursorDot) return
      cursorDot.style.transform = 'scale(1)'
      cursorDot.style.opacity = '1'
    }
    let interactiveEls = []
    if (hasHover) {
      document.addEventListener('mousemove', onMove)
      interactiveEls = Array.from(document.querySelectorAll('a, button, .cta-btn'))
      interactiveEls.forEach((el) => {
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
      })
    }

    // Side nav active dot
    const sections = document.querySelectorAll('section[id]')
    const navDots = document.querySelectorAll('.nav-dot')
    const updateActiveDot = () => {
      let current = ''
      sections.forEach((section) => {
        const top = section.offsetTop - 150
        if (window.scrollY >= top) current = section.getAttribute('id')
      })
      navDots.forEach((dot) => {
        dot.classList.remove('active')
        if (dot.getAttribute('href') === '#' + current) dot.classList.add('active')
      })
    }
    window.addEventListener('scroll', updateActiveDot)
    updateActiveDot()

    // Reveal on scroll
    const revealEls = document.querySelectorAll('[data-reveal]')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = (i % 3) * 0.15 + 's'
      revealObserver.observe(el)
    })

    // Skill bars
    const skillRows = document.querySelectorAll('.skill-row')
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.skill-bar-fill')
            if (fill) {
              const w = fill.getAttribute('data-width')
              fill.style.width = w + '%'
            }
            skillObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    skillRows.forEach((r) => skillObserver.observe(r))

    // Smooth scroll
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    const onAnchorClick = function (e) {
      const href = this.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    anchors.forEach((a) => a.addEventListener('click', onAnchorClick))

    return () => {
      document.removeEventListener('mousemove', onMove)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
      window.removeEventListener('scroll', updateActiveDot)
      revealObserver.disconnect()
      skillObserver.disconnect()
      anchors.forEach((a) => a.removeEventListener('click', onAnchorClick))
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" id="cursorDot"></div>
      <Header />
      <main className="main-content">
        <Hero />
        <Sobre />
        <Experiencia />
        <Habilidades />
        <Projetos />
        <Contato />
        <Footer />
      </main>
    </>
  )
}
