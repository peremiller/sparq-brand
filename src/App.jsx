import { useEffect, useState } from 'react'
import Hexmark from './components/Hexmark.jsx'
import Section from './components/Section.jsx'

// Years of professional experience since December 2011 — recomputed on every load,
// so it advances automatically each year (e.g. 14+ now, 15+ from December 2026).
const CAREER_START_YEAR = 2011
const CAREER_START_MONTH = 12 // December
const now = new Date()
const experienceYears =
  now.getFullYear() - CAREER_START_YEAR - (now.getMonth() + 1 < CAREER_START_MONTH ? 1 : 0)

const NAV_LINKS = [
  ['Story', '#story'],
  ['Pillars', '#pillars'],
  ['SPARQ', '#sparq'],
  ['Edge', '#edge'],
  ['Creative', '#creative'],
  ['2026', '#trajectory'],
  ['Connect', '#connect'],
]

const STORY_CARDS = [
  ['Quality engineering veteran', `${experienceYears}+ years of QA across banking, healthcare, energy, and legal — currently driving delivery for Constellation Energy and Exterro.`],
  ['Builder of ventures', 'Founder behind the SPARQ brand universe — nine ventures spanning tech, travel, wellness, and content.'],
  ['Creator at heart', 'Filmmaker, songwriter, and fitness content creator turning ideas into films, music, and movement.'],
  ['Rooted in the Philippines', 'Grounded in Filipino identity, faith, and family — building from Las Piñas for a global audience.'],
]

const PILLARS = [
  ['01', 'Quality Engineering', 'Test strategy, automation architecture, and delivery leadership in high-stakes, regulated environments.'],
  ['02', 'Entrepreneurship', 'The SPARQ ecosystem — turning ideas into brands, products, and income streams.'],
  ['03', 'Creation', 'Film, music, and fitness content that documents the journey and inspires transformation.'],
  ['04', 'Faith · Family · Filipino', 'Values-first living: spirituality, relationships, and community as the foundation of it all.'],
]

const VENTURES = [
  ['PrimeQE Solutions', 'QA consulting & quality engineering', '“Powering Software You Can Trust.”'],
  ['AuraQ Technology', 'Wearables & relationship intelligence', '“Technology with Presence.”'],
  ['Miller Moves', 'Fitness & wellness content channel', 'Exercise · Wellness · Transformation'],
  ['Joey & Ritz Voyager', 'Travel brand & experiences', 'Journeys worth sharing'],
  ['Sentinel Venture Studio', 'Venture incubation & brand building', 'Where SPARQ ideas take flight'],
  ['4Life Network', 'Wellness & direct-sales community', 'Health, income, relationships'],
]

const EDGE_CARDS = [
  ['Quality strategy & delivery leadership', 'Test plans, ADO dashboards, sprint metrics, and data-migration test strategy for enterprise programs.'],
  ['Automation & AI-augmented testing', 'Playwright, Selenium, JMeter, Python — plus agentic-AI design patterns applied to the test loop.'],
  ['Credentialed and always learning', 'ISTQB Advanced Test Manager track, Lean Six Sigma exploration, continuous AI-agent coursework.'],
]

const JOBS = [
  {
    period: 'Oct 2021 — Present',
    role: 'Software Quality Engineering Associate Manager',
    at: '@ Accenture',
    bullets: [
      'Drive delivery and engineering quality for global clients including Constellation Energy and Exterro.',
      'Led a GenAI transformation (Copilot, Gemini) and a Selenium automation rollout for a 20-person QA team — cutting release cycle time by two weeks.',
      'Raised accessibility compliance from 72% to 95% in six months and grew the QA team by 25%.',
    ],
  },
  {
    period: 'Jul 2016 — Oct 2021',
    role: 'Senior Software Quality Assurance Engineer',
    at: '@ RCG Global Services',
    bullets: [
      'Led functional & regression testing for major US clients (Chico’s FAS, One Call Care, Disney).',
      'Used analytics-driven regression to reduce critical defects by 25% and authored runbooks that cut test-execution errors by 20%.',
    ],
  },
  {
    period: '2011 — 2016',
    role: 'QA Analyst — earlier roles',
    at: '@ Kforce · Cognizant · Icomteq',
    bullets: [
      'Built the foundation: test-case design, mobile & rich-media testing, infrastructure automation at Macquarie Bank.',
      'Most Outstanding Employee of the Year, 2013.',
    ],
  },
]

const CREATIVE_CARDS = [
  ['Film · in development', 'Rewind You', 'Original film concept scored with companion music — a story about second chances and time.'],
  ['Music · in production', '“Find Your Way Back to Me”', 'Original song part of a growing catalog exploring love, faith, and return.'],
  ['Fitness content', 'Miller Moves Channel', 'Transformation content documenting the journey — exercise, wellness, and discipline in motion.'],
]

const VOICE = [
  ['Disciplined', 'Structured, habit-driven, follows through — the 28-day-calendar energy.'],
  ['Energetic', 'Optimistic and forward-moving; every post sparks action.'],
  ['Grounded', 'Faith-anchored and family-first; success measured beyond money.'],
  ['Generous', 'Teaches what it learns — QA, AI, fitness, and entrepreneurship.'],
]

const TRAJ = [
  ['Lead', 'Step into the QA Automation Lead role and certify as ISTQB Advanced Test Manager.'],
  ['Build', 'Scale PrimeQE and the SPARQ ventures from concepts into revenue.'],
  ['Create', 'Release Rewind You assets and “Grace,” and grow Miller Moves consistently.'],
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = document.querySelectorAll('.reveal')
    if (reduce) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const year = new Date().getFullYear()

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <a className="nav__brand" href="#top">
          <Hexmark letter="M" />
          <span className="nav__name">
            Miller T. Perez <em>“AJ”</em>
          </span>
        </a>
        <div className={`nav__links${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </div>
        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <main>
        {/* HERO */}
        <header className="hero" id="top">
          <div className="hero__spark"></div>
          <div className="hero__inner">
            <p className="hero__eyebrow">
              Personal Brand · 2026 · Las Piñas, Metro Manila, Philippines
            </p>
            <h1 className="hero__name">
              Miller T. Perez <span className="hero__alias">“AJ”</span>
            </h1>
            <p className="hero__roles">
              Quality Engineering Leader<span className="dot"></span>
              Multipreneur<span className="dot"></span>
              Creator
            </p>
            <p className="hero__tagline">
              Engineering quality. Sparking ventures. Creating with purpose.
            </p>
            <div className="hero__cta">
              <a className="btn btn--spark" href="#sparq">Explore SPARQ</a>
              <a className="btn btn--ghost" href="#connect">Let’s build</a>
              <a
                className="btn btn--ghost"
                href="https://aj-miller-t-perez.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                QA Portfolio ↗
              </a>
            </div>
            <div className="hero__stats">
              <div className="stat">
                <div className="stat__value">{experienceYears}+</div>
                <div className="stat__label">years in quality engineering</div>
              </div>
              <div className="stat">
                <div className="stat__value">4</div>
                <div className="stat__label">regulated industries served</div>
              </div>
              <div className="stat">
                <div className="stat__value">9</div>
                <div className="stat__label">ventures under the SPARQ umbrella</div>
              </div>
            </div>
          </div>
        </header>

        {/* STORY */}
        <Section
          id="story"
          kicker="The Brand Story"
          title="Quality is a habit, not an act."
          intro="From regulated-industry QA floors to a nine-venture brand ecosystem — AJ builds with the same principle everywhere: quality is a habit, not an act."
        >
          <div className="grid grid--2">
            {STORY_CARDS.map(([h, p]) => (
              <div className="card reveal" key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* PILLARS */}
        <Section
          id="pillars"
          kicker="Four Brand Pillars"
          title="Everything maps back to one of these."
        >
          <div className="grid grid--4">
            {PILLARS.map(([num, h, p]) => (
              <div className="pillar reveal" key={num}>
                <span className="pillar__num">{num}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* SPARQ */}
        <Section
          id="sparq"
          kicker="The SPARQ Ecosystem"
          title="One umbrella, nine ventures."
          intro="Each with its own voice, all carrying the spark."
        >
          <div className="grid grid--3">
            {VENTURES.map(([name, cat, motto]) => (
              <div className="venture reveal" key={name}>
                <Hexmark letter={name.charAt(0)} />
                <h3>{name}</h3>
                <p className="venture__cat">{cat}</p>
                <p className="venture__motto">{motto}</p>
              </div>
            ))}
          </div>
          <p className="venture__note">
            + three more ventures in development across content, real estate, and community.
          </p>
        </Section>

        {/* EDGE */}
        <Section
          id="edge"
          kicker="The Professional Edge"
          title="Regulated rigor, modern automation."
          intro="The QA leader who pairs deep regulated-industry rigor with modern AI-augmented automation."
        >
          <div className="grid grid--3">
            {EDGE_CARDS.map(([h, p]) => (
              <div className="card reveal" key={h}>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>

          <div className="nextmove reveal">
            <span className="nextmove__label">Next Move</span>
            <h3>QA Automation Lead</h3>
            <p>
              Targeting a leadership role at a BGC-based bank — bringing automation
              architecture, team leadership, and a builder’s mindset to financial-grade quality.
            </p>
          </div>

          <div className="timeline">
            {JOBS.map((job) => (
              <div className="job reveal" key={job.role}>
                <div className="job__period">{job.period}</div>
                <div className="job__body">
                  <h4>
                    {job.role} <span className="job__at">{job.at}</span>
                  </h4>
                  <ul>
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CREATIVE */}
        <Section
          id="creative"
          kicker="The Creative Side"
          title="The brand’s heartbeat."
          intro="Stories, songs, and movement that make it human."
        >
          <div className="grid grid--3">
            {CREATIVE_CARDS.map(([kind, h, p]) => (
              <div className="card card--creative reveal" key={h}>
                <span className="card__kind">{kind}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>

          <div className="creative__cta reveal">
            <p>
              Creative work differentiates the brand — it proves the same eye for craft
              that drives the engineering.
            </p>
            <a
              className="btn btn--spark"
              href="https://suno.com/@millertperez"
              target="_blank"
              rel="noreferrer"
            >
              Listen on Suno — @millertperez ↗
            </a>
          </div>

          <div className="voice">
            {VOICE.map(([word, text]) => (
              <div className="voice__item" key={word}>
                <strong>{word}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* TRAJECTORY */}
        <Section
          id="trajectory"
          kicker="The 2026 Trajectory"
          title="Lead. Build. Create."
        >
          <div className="grid grid--3">
            {TRAJ.map(([verb, p]) => (
              <div className="traj reveal" key={verb}>
                <h3>{verb}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CONNECT */}
        <Section
          id="connect"
          kicker="Connect"
          title="Let’s build something with quality."
        >
          <div className="connect">
            <div className="connect__links">
              <a className="btn btn--spark" href="mailto:pjomill@gmail.com">
                pjomill@gmail.com
              </a>
              <a
                className="btn btn--ghost"
                href="https://www.linkedin.com/in/millertperez/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn--ghost"
                href="https://suno.com/@millertperez"
                target="_blank"
                rel="noreferrer"
              >
                Suno — Music
              </a>
              <a className="btn btn--ghost" href="tel:+639688515632">
                +63 968 851 5632
              </a>
              <a
                className="btn btn--ghost"
                href="/AJ-Miller-T-Perez-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Résumé
              </a>
            </div>
            <p className="connect__tag">
              Miller T. Perez “AJ” · Las Piñas, Metro Manila, Philippines · SPARQ / PrimeQE / Miller Moves
            </p>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <span>© {year} Miller T. Perez</span>
        <span className="footer__made">
          Engineering quality. Sparking ventures. Creating with purpose.
        </span>
      </footer>
    </>
  )
}
