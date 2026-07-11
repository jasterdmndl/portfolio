import { lazy, Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const DeveloperPlanet = lazy(() => import('./components/DeveloperPlanet'))

const ArrowUpRight = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
const Download = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" /></svg>

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [entered, setEntered] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (!entered) {
      setShowContent(false)
      return
    }

    const timeout = window.setTimeout(() => setShowContent(true), 420)
    return () => window.clearTimeout(timeout)
  }, [entered])

  return (
    <main>
      {showContent && (
        <>
          <div className="noise" aria-hidden="true" />
          <div className="technical-grid" aria-hidden="true" />
          <aside className="site-rail" aria-hidden="true"><span>JD / 001</span><i /><span>MANILA, PH</span></aside>
          <nav className="nav shell" aria-label="Primary navigation">
            <a className="brand" href="#top" aria-label="Jhester Dimaandal home" onClick={() => setMenuOpen(false)}><span className="brand-mark">JD</span><span>JHESTER <span className="muted">DIMAANDAL</span></span></a>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><span /><span /></button>
            <div className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
              <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
              <a className="nav-cta" href="mailto:hello@jhesterdimaandal.dev">Start a conversation <ArrowUpRight /></a>
            </div>
          </nav>
        </>
      )}

      <section className={`hero shell ${entered ? 'entered' : 'landing'}`} id="top">
        {showContent && (
          <div className="hero-copy">
            <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}><span className="status-dot" /> System online · Available for opportunities</motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>
              <p className="hello">Hello, I&apos;m</p>
              <h1>Jhester<br /><em>Dimaandal<span className="title-mark"></span></em></h1>
            </motion.div>
            <motion.p className="headline" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .18 }}>Building software that grows<br />with every challenge.</motion.p>
            <motion.p className="intro" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .25 }}>I build modern, scalable applications with a focus on clean architecture and thoughtful user experiences.</motion.p>
            <motion.div className="actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .32 }}>
              <a className="button primary" href="#work">View my work <ArrowUpRight /></a>
              <a className="button secondary" href="/resume.pdf" download>Download résumé <Download /></a>
            </motion.div>
          </div>
        )}
        <motion.div className="planet-stage" initial={{ opacity: 0, scale: .92 }} animate={entered ? { opacity: 1, scale: 1.04, y: -8 } : { opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .12, ease: 'easeOut' }} whileHover={entered ? { scale: 1.06 } : { scale: 1.02 }}>
          <div className="planet-label label-top"><span>01</span> DEVELOPER WORLD</div>
          <Suspense fallback={<div className="planet-loader" aria-label="Loading 3D developer world" />}><DeveloperPlanet entered={entered} onEnter={() => setEntered(true)} /></Suspense>
          <div className="planet-label label-bottom"><span className="pulse" /> BUILDING IN PUBLIC</div>
          <p className="drag-hint">Give it a nudge — drag to explore <span>↗</span></p>
          {!entered && <div className="entry-prompt"><strong>Tap the planet</strong><span>to enter the developer world</span></div>}
        </motion.div>
      </section>
      {showContent && <div className="scroll-cue shell"><span className="scroll-line" /> Scroll to explore</div>}

      <section className={`work-section shell ${showContent ? 'visible' : 'hidden'}`} id="work">
        <div className="section-heading"><div><p className="section-kicker">Selected work <span>·</span> 2024—2026</p><h2>Thoughtful systems,<br /><em>built to last.</em></h2></div><p>Every project begins with the same question: how can technology make the next step feel effortless?</p></div>
        <div className="project-grid">
          {[
            ['01', 'Web applications', 'Reliable product experiences shaped around people, not complexity.'],
            ['02', 'Scalable systems', 'Deliberate foundations that stay clear as a product and its team grow.'],
            ['03', 'Developer tools', 'Small, focused tools that turn friction into flow for technical teams.'],
          ].map(([number, title, description]) => <article className="project-card" key={number}><div className="card-top"><span>{number}</span><ArrowUpRight /></div><div><h3>{title}</h3><p>{description}</p></div><div className="card-orbit" aria-hidden="true"><i /><b /></div></article>)}
        </div>
      </section>
      <section className={`about-section shell ${showContent ? 'visible' : 'hidden'}`} id="about">
        <p className="section-kicker">A little about me</p>
        <div className="about-content"><h2>Engineering with<br /><em>quiet intention.</em></h2><div><p>I care about the work behind the interface: well-considered systems, readable code, and a product experience that feels naturally useful.</p><p>I&apos;m always learning, refining, and building toward the next meaningful challenge.</p><a className="text-link" href="mailto:hello@jhesterdimaandal.dev">More about my approach <ArrowUpRight /></a></div></div>
      </section>
      <section className={`contact-section shell ${showContent ? 'visible' : 'hidden'}`} id="contact">
        <div><p className="section-kicker">Have a project in mind?</p><h2>Let&apos;s make it<br /><em>remarkable.</em></h2></div><a className="contact-orb" href="mailto:hello@jhesterdimaandal.dev" aria-label="Email Jhester Dimaandal"><span>GET IN<br />TOUCH</span><ArrowUpRight /></a>
      </section>
      <footer className={`footer shell ${showContent ? 'visible' : 'hidden'}`}><span>© {new Date().getFullYear()} Jhester Dimaandal</span><span>Designed &amp; built with intention</span></footer>
    </main>
  )
}

export default App
