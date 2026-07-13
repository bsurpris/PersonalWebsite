import { useState, type FormEvent } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Placeholder — wire up to backend/Formspree/etc.
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact" id="contact-page">
      <div className="contact__inner">
        {/* Left — Info */}
        <div className="contact__left">
          <p className="section-label section-label--dot animate-in">
            SYS.COMM_INIT
          </p>
          <h1 className="contact__heading animate-in animate-in--delay-1">
            Initialize Connection.
          </h1>
          <p className="contact__text animate-in animate-in--delay-2">
            Open to collaborations on software engineering, product management, 
            and community initiatives. Response time: &lt;24 hours.
          </p>

          <div className="contact__channels animate-in animate-in--delay-3">
            <div className="contact__channel">
              <span className="contact__channel-icon">//</span>
              <span className="contact__channel-label">Email</span>
              <span className="contact__channel-value">
                surpris@usc.edu
              </span>
            </div>
            <div className="contact__channel">
              <span className="contact__channel-icon">//</span>
              <span className="contact__channel-label">LinkedIn</span>
              <span className="contact__channel-value">
                linkedin.com/in/brandon-surpris-160abb233
              </span>
            </div>
            <div className="contact__channel">
              <span className="contact__channel-icon">//</span>
              <span className="contact__channel-label">Location</span>
              <span className="contact__channel-value">
                Los Angeles, CA / Baldwin, NY
              </span>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <form
          className="contact__form animate-in animate-in--delay-2"
          onSubmit={handleSubmit}
          id="contact-form"
        >
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              type="text"
              id="contact-name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              id="contact-email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              type="text"
              id="contact-subject"
              placeholder="Project inquiry"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              placeholder="Describe your project or inquiry..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn--primary contact__submit"
            id="contact-submit-btn"
          >
            Transmit Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
