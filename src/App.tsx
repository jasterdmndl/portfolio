import { lazy, Suspense, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fetchUserRepos, GitHubRepo } from './utils/github'
import { GitHubProjectCard } from './components/GitHubProjectCard'

const DeveloperPlanet = lazy(() => import('./components/DeveloperPlanet'))

const ArrowUpRight = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
const Download = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 19h14" /></svg>

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [reposLoading, setReposLoading] = useState(true)

  useEffect(() => {
    async function loadRepos() {
      setReposLoading(true)
      const fetchedRepos = await fetchUserRepos()
      // Take top 4 most recently updated repos
      setRepos(fetchedRepos.slice(0, 4))
      setReposLoading(false)
    }
    loadRepos()
  }, [])

  function handleProjectSelect(id: string) {
    setSelectedProject(id)
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <div className="technical-grid" aria-hidden="true" />
      <aside className="site-rail" aria-hidden="true"><span>JD / 2026</span><i /><span>BATANGAS CITY, PH</span></aside>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Jhester Dimaandal home" onClick={() => setMenuOpen(false)}><span className="brand-mark">JD</span><span>JHESTER <span className="muted">DIMAANDAL</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}><span /><span /></button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
          <a className="nav-cta" href="https://www.facebook.com/lemuel.dimaandal/">Start a conversation <ArrowUpRight /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}><span className="status-dot" /> CURRENTLY BUILDING · Available for opportunities</motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>
            <p className="hello">Hello, I&apos;m</p>
            <h1>Jhester<br /><em>Dimaandal<span className="title-mark"></span></em></h1>
          </motion.div>
          <motion.p className="headline" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .18 }}>Building software that grows<br />with every challenge.</motion.p>
          <motion.p className="intro" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .25 }}>I enjoy turning ideas into software that solves real problems. Every project is an opportunity to improve my craft, explore new technologies, and build something meaningful.</motion.p>
          <motion.div className="actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .32 }}>
            <a className="button primary" href="#work">View my work <ArrowUpRight /></a>
            <a className="button secondary" href="/resume.pdf" download>Download résumé <Download /></a>
          </motion.div>
        </div>
          <motion.div className="planet-stage" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, delay: .12, ease: 'easeOut' }}>
          <div className="planet-label label-top"><span>01</span> DEVELOPER WORLD</div>
          <Suspense fallback={<div className="planet-loader" aria-label="Loading 3D developer world" />}><DeveloperPlanet selected={selectedProject} onProjectSelect={handleProjectSelect} repos={repos} /></Suspense>
          <div className="planet-label label-bottom"><span className="pulse" /> {repos.length > 0 ? 'LIVE FROM GITHUB' : 'LOADING PROJECTS'}</div>
          <p className="drag-hint">Give it a nudge — drag to explore <span>↗</span></p>
        </motion.div>
      </section>
      <div className="scroll-cue shell"><span className="scroll-line" /> Scroll to explore</div>

      <section className="work-section shell" id="work">
        <div className="section-heading"><div><p className="section-kicker">Featured projects <span>·</span> From GitHub</p><h2>Thoughtful systems,<br /><em>built to last.</em></h2></div><p>Every project begins with the same question: how can technology make the next step feel effortless?</p></div>
        <div className="github-projects-grid">
          {reposLoading ? (
            <div className="loading-state" style={{ gridColumn: '1 / -1', padding: '2rem', textAlign: 'center', opacity: 0.6 }}>Loading your projects...</div>
          ) : repos.length === 0 ? (
            <div className="empty-state" style={{ gridColumn: '1 / -1', padding: '2rem', textAlign: 'center', opacity: 0.6 }}>No repositories found. Check your GitHub settings or username.</div>
          ) : (
            repos.map((repo, idx) => (
              <div key={repo.id} id={`project-${String(idx + 1).padStart(2, '0')}`}>
                <GitHubProjectCard repo={repo} isSelected={selectedProject === `project-${String(idx + 1).padStart(2, '0')}`} />
              </div>
            ))
          )}
        </div>
      </section>
      <section className="about-section shell" id="about">
        <p className="section-kicker">A little about me</p>
        <div className="about-content"><h2>Every projects<br /><em>expands my universe.</em></h2><div><p>I enjoy transforming ideas into software that is simple, scalable, and built to last. Every project is an opportunity to learn, refine my craft, and create meaningful solutions.</p><p>I&apos;m always learning, refining, and building toward the next meaningful challenge.</p><a className="text-link" href="https://www.facebook.com/lemuel.dimaandal/">Learn More About Me <ArrowUpRight /></a></div></div>
      </section>
      <section className="contact-section shell" id="contact">
        <div className="contact-character">
          <img src="/images/pixel-character.png" alt="Pixel art character with phone" />
        </div>
        <div className="contact-content">
          <div><p className="section-kicker">Have a project in mind?</p><h2>Let&apos;s make it<br /><em>remarkable.</em></h2></div>
          <a className="contact-cta" href="https://www.facebook.com/lemuel.dimaandal/" aria-label="Email Jhester Dimaandal">
            <span>GET IN TOUCH</span>
            <ArrowUpRight />
          </a>
        </div>
      </section>
      <footer className="footer shell"><span>© {new Date().getFullYear()} Jhester Dimaandal</span><span>Designed &amp; built with intention</span></footer>
    </main>
  )
}

export default App
