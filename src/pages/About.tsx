import photo1Img from '../assets/photo1.jpg'
import photo2Img from '../assets/photo2.jpg'
import photo3Img from '../assets/photo3.jpg'

function About() {
  return (
    <section className="about" id="about-page">
      <div className="about__inner">
        {/* Left Column — Bio */}
        <div className="about__bio">

          <h1 className="about__heading animate-in" style={{ marginTop: 0 }}>
            My Story
          </h1>

          <p className="about__text animate-in animate-in--delay-1">
            I'm a student at the USC Viterbi School of Engineering combining technical rigor 
            with strategic business execution. My passion lies in software engineering, 
            product management, and building community through STEM.
          </p>

          <p className="about__text animate-in animate-in--delay-1">
            My experience spans full-stack development, machine learning, and engaging with diverse teams 
            to execute successful projects. I thrive in high-growth environments where technical 
            precision meets rapid iteration and impactful leadership.
          </p>

        </div>

        {/* Right Column — Sections */}
        <div className="about__sections">
          
          {/* Community */}
          <div className="about-section animate-in animate-in--delay-2">
            <div className="about-section__header">
              <h2 className="about-section__title">Community</h2>
            </div>
            
            <div className="about-gallery" style={{ marginTop: '1rem' }}>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '1.5rem', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-headline)', marginBottom: '0.25rem' }}>Pre-Collegiate Initiative Chair</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    National Society of Black Engineers
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    Plan and coordinate STEM and college readiness programming for K-12 students to demonstrate the opportunity of a 4-year college education. Organized virtual professional and college admissions prep programming.
                  </p>
                </div>
              </div>
              
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '1.5rem', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-headline)', marginBottom: '0.25rem' }}>Coding Teaching Assistant</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    Time2Tutor Learning Center
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    Taught groups of 20 children programming and game-design fundamentals using the web platform Tynker.
                  </p>
                </div>
              </div>

              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '1.5rem', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-headline)', marginBottom: '0.25rem' }}>Former Vice Chairman</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    The K.I.N.G.S Organization
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                    My junior year of high school I helped start and cultivate a network of 200+ Black male high schoolers committed to academic success. Built an online presence to 1,800+ followers, organized professional programming, and successfully campaigned a $4,000 fundraising initiative.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Photography */}
          <div className="about-section animate-in animate-in--delay-3" style={{ marginTop: '2.5rem' }}>
            <div className="about-section__header">
              <h2 className="about-section__title">Photography</h2>
            </div>

            <p className="about-section__text">
              In addition to building projects and thinking about user experiences, I enjoy taking pictures around NY, LA and wherever else life takes me.
            </p>

            <div className="about-gallery" style={{ marginTop: '1.5rem' }}>
              <div className="about-gallery__main" style={{ minHeight: '300px', backgroundImage: `url(${photo1Img})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '12px' }} />
              <div className="about-gallery__thumbnails">
                <div className="about-gallery__thumb" style={{ minHeight: '100px', backgroundImage: `url(${photo2Img})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }} />
                <div className="about-gallery__thumb" style={{ minHeight: '100px', backgroundImage: `url(${photo3Img})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
