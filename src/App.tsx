import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import {
  certifications,
  education,
  experience,
  navLinks,
  profile,
  projects,
  skills,
} from './data/profile'

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    const targets = node.querySelectorAll('.reveal')
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H9M17 7V15"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Reveal({
  children,
  className = '',
  as: Tag = 'div',
  delay,
}: {
  children: ReactNode
  className?: string
  as?: ElementType
  delay?: 1 | 2 | 3
}) {
  const delayClass = delay ? ` reveal-delay-${delay}` : ''
  return (
    <Tag className={`reveal${delayClass} ${className}`.trim()}>{children}</Tag>
  )
}

function Navbar({
  menuOpen,
  onToggle,
  onNavigate,
}: {
  menuOpen: boolean
  onToggle: () => void
  onNavigate: () => void
}) {
  const scrolled = useScrolled()

  return (
    <>
      <header className={`nav${scrolled || menuOpen ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="brand" href="#top" onClick={onNavigate}>
            Nishant <span>Kohale</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a className="btn btn-primary nav-cta" href={profile.resumeFile} download>
              Resume
            </a>
          </nav>

          <button
            className={`menu-toggle${menuOpen ? ' open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={onToggle}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-panel${menuOpen ? ' open' : ''}`}>
        <nav aria-label="Mobile">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={onNavigate}>
              {link.label}
            </a>
          ))}
          <a className="btn btn-primary" href={profile.resumeFile} download onClick={onNavigate}>
            Download Resume
          </a>
        </nav>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-atmosphere" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="plane" />
      </div>

      <div className="container hero-content">
        <h1 className="hero-brand">
          Nishant <em>Kohale</em>
        </h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-ghost" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="hero-meta">
          <span>{profile.location}</span>
          <span>4 years experience</span>
          <a href={profile.github.url} target="_blank" rel="noreferrer">
            GitHub · {profile.github.label}
          </a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title">Engineer focused on useful AI.</h2>
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-copy" delay={1}>
            <p>{profile.summary}</p>
            <p>
              Currently an Associate Consultant at{' '}
              <a href={experience[0].companyUrl} target="_blank" rel="noreferrer">
                KPMG
              </a>
              , working on AI and Generative AI initiatives for Gujarat Government departments —
              previously an SDE at Click2Cloud building LLM features, RAG systems, and agent-driven
              automation.
            </p>
          </Reveal>
          <Reveal className="about-aside" delay={2} as="aside">
            <h3>Details</h3>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={profile.emailHref}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={profile.phoneHref}>{profile.phone}</a>
                </dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={profile.linkedin.url} target="_blank" rel="noreferrer">
                    {profile.linkedin.label}
                  </a>
                </dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>
                  <a href={profile.github.url} target="_blank" rel="noreferrer">
                    {profile.github.label}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I have built and shipped.</h2>
          <p className="section-lead">
            Roles and impact drawn directly from my resume — from production GenAI work to early
            industry exposure.
          </p>
        </Reveal>
        <div className="timeline">
          {experience.map((job, index) => (
            <Reveal key={job.company} as="article" className="job" delay={(index % 3) + 1 as 1 | 2 | 3}>
              <div className="job-top">
                <h3 className="job-company">
                  <a href={job.companyUrl} target="_blank" rel="noreferrer">
                    {job.company}
                  </a>
                </h3>
                <span className="job-period">{job.period}</span>
              </div>
              <p className="job-meta">
                {job.role} · {job.location}
              </p>
              <ul className="job-bullets">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <p className="section-label">Projects</p>
          <h2 className="section-title">Selected work.</h2>
          <p className="section-lead">
            Production AI platforms and systems engineering — technologies and outcomes as listed on
            my resume.
          </p>
        </Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.title} as="article" className="project" delay={(index % 3) + 1 as 1 | 2 | 3}>
              <div className="project-side">
                <p className="project-index">0{index + 1}</p>
                <h3 className="project-title">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.title} <ExternalIcon />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-row">
                  {project.tech.map((item) => (
                    <span className="tech" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                {'urlNote' in project && project.urlNote ? (
                  <span className="placeholder-note">{project.urlNote}</span>
                ) : null}
              </div>
              <ul className="project-bullets">
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Tools I use every day.</h2>
          <p className="section-lead">
            Skill categories and technologies exactly as listed on the resume.
          </p>
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <Reveal
              key={group.category}
              className="skill-group"
              delay={(index % 3) + 1 as 1 | 2 | 3}
            >
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal>
          <p className="section-label">Education & certifications</p>
          <h2 className="section-title">Academic foundation.</h2>
        </Reveal>
        <div className="edu-grid">
          <Reveal className="edu-card" delay={1}>
            <h3>Education</h3>
            <p className="edu-school">{education.school}</p>
            <p className="edu-degree">
              {education.degree} — CGPA: {education.cgpa}
            </p>
            <p className="edu-meta">
              {education.period} · {education.location}
            </p>
          </Reveal>
          <Reveal className="cert-card" delay={2}>
            <h3>Certifications</h3>
            <ul className="cert-list">
              {certifications.map((cert) => (
                <li key={cert.title}>
                  <a href={cert.url} target="_blank" rel="noreferrer">
                    {cert.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="contact-panel">
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's build something intelligent.</h2>
          <p className="section-lead">
            Open to conversations about Generative AI engineering, RAG systems, and agentic
            product work.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={profile.emailHref}>
              Email me
            </a>
            <a
              className="btn btn-ghost"
              href={profile.linkedin.url}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={profile.resumeFile} download>
              Download resume
            </a>
          </div>
          <div className="contact-details">
            <a href={profile.emailHref}>{profile.email}</a>
            <a href={profile.phoneHref}>{profile.phone}</a>
            <span>{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}. Built from resume content.
        </p>
        <div className="footer-links">
          <a href={profile.github.url} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin.url} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.resumeFile} download>
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const rootRef = useReveal<HTMLDivElement>()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div ref={rootRef}>
      <Navbar
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
