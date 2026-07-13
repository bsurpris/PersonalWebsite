import { NavLink } from 'react-router-dom'

function Navbar() {
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

      <a href="#" className="navbar__cta" id="download-cv-btn">
        Download CV
      </a>

      <button className="navbar__menu-btn" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar
