// ============================================
// MARIANA GOMES CARVALHO - Portfolio JS
// Cursor follower, side-nav, animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // --- Cursor Dot ---
    const cursorDot = document.getElementById('cursorDot');
    if (window.matchMedia('(hover: hover)').matches) {
        document.addEventListener('mousemove', (e) => {
            cursorDot.style.left = e.clientX - 6 + 'px';
            cursorDot.style.top = e.clientY - 6 + 'px';
        });

        // Grow on hover over interactive elements
        document.querySelectorAll('a, button, .cta-btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'scale(3)';
                cursorDot.style.opacity = '0.5';
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'scale(1)';
                cursorDot.style.opacity = '1';
            });
        });
    }

    // --- Mobile Menu ---
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // --- Side Nav Active Dot ---
    const sections = document.querySelectorAll('section[id]');
    const navDots = document.querySelectorAll('.nav-dot');

    function updateActiveDot() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href') === '#' + current) {
                dot.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveDot);

    // --- Reveal on Scroll ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('[data-reveal]').forEach((el, i) => {
        el.style.transitionDelay = (i % 3) * 0.15 + 's';
        revealObserver.observe(el);
    });

    // --- Skill Bar Animation ---
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target.querySelector('.skill-bar-fill');
                if (fill) {
                    const width = fill.getAttribute('data-width');
                    fill.style.width = width + '%';
                }
                skillObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.skill-row').forEach(row => {
        skillObserver.observe(row);
    });

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
