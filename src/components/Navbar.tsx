import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import resumePdf from '../assets/BrandonSurprisResume.pdf'

function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <nav className="navbar" id="navbar">
      <NavLink to="/" className="navbar__logo">
        Brandon Surpris
      </NavLink>

      <div className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navbar__link${isActive ? ' active' : ''}`
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `navbar__link${isActive ? ' active' : ''}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `navbar__link${isActive ? ' active' : ''}`
          }
        >
          About
        </NavLink>
      </div>

      <button
        type="button"
        className="navbar__cta"
        id="view-resume-btn"
        onClick={() => setIsResumeOpen(true)}
      >
        View Resume
      </button>

      <button className="navbar__menu-btn" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {isResumeOpen && createPortal(
        <div className="resume-modal" role="dialog" aria-modal="true" aria-label="Resume">
          <div className="resume-modal__backdrop" onClick={() => setIsResumeOpen(false)} />
          <div className="resume-modal__panel">
            <button
              type="button"
              className="resume-modal__close"
              aria-label="Close resume"
              onClick={() => setIsResumeOpen(false)}
            >
              ×
            </button>
            <iframe src={resumePdf} title="Brandon Surpris Resume" className="resume-modal__frame" />
          </div>
        </div>,
        document.body
      )}
    </nav>
  )
}

export default Navbar
