import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  const fullText = "Hi I'm Brandon, a CS and Business student interested in agentic ai, machine learning, and improving user experiences"
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1))
      index++
      if (index >= fullText.length) {
        clearInterval(timer)
      }
    }, 35)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="home home--centered" id="home-page">
      <div className="home__inner">
        
        <div className="home__profile-pic animate-in">
          {/* Placeholder for face */}
        </div>

        <h1 className="home__heading-centered animate-in animate-in--delay-1">
          {displayText}<span className="typewriter-cursor">.</span>
        </h1>

        <div className="home__actions-centered animate-in animate-in--delay-2">
          <Link to="/projects" className="btn btn--primary" id="view-projects-btn">
            View Projects
          </Link>
          <a href="mailto:bsurpris2@gmail.com" className="btn btn--secondary" id="get-in-touch-btn">
            Get In Touch
          </a>
        </div>

      </div>
    </section>
  )
}

export default Home
