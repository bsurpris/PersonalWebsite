import ProjectCard from '../components/ProjectCard'

function Projects() {
  const stackItems = ['C++', 'Java', 'Python', 'TypeScript', 'React', 'Node.js', 'SQL', 'TensorFlow.js', 'AWS']

  return (
    <section className="projects" id="projects-page">
      {/* Tech Rail */}
      <div className="tech-rail animate-in">
        <div className="tech-rail__track">
          {[...stackItems, ...stackItems, ...stackItems, ...stackItems].map((item, index) => (
            <span key={index} className="pill pill--rail">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="projects__inner" style={{ paddingTop: '2rem' }}>
        {/* Project Grid */}
        <div className="projects__grid animate-in animate-in--delay-2">
          <ProjectCard
            icon="◇"
            title="FormMax"
            description="Developed a web app that uses TensorFlow.js pose estimation and a live webcam feed to detect and flag bad form during weightlifting exercises in real time. Implemented squat analysis logic using MoveNet skeletal keypoints, achieving 92% rep-counting accuracy across varied lighting and body types."
            pills={['React', 'TypeScript', 'TensorFlow.js', 'Tailwind CSS']}
            status="Active Focus"
            statusType="production"
          />
          <ProjectCard
            icon="◇"
            title="TrojanChat"
            description="Built a chat application featuring React 19 frontend and Node.js backend, delivering multi-channel messaging experience across all devices. Implemented RESTful API, enabling persistent message storage and efficient channel management."
            pills={['React', 'Node.js', 'Tailwind CSS']}
            status="Completed"
            statusType="beta"
          />
          <ProjectCard
            icon="◇"
            title="Unicorn Market"
            description="Developed a full-stack prediction market using React 19 and Node.js for trading on startup events like IPOs. Implemented LMSR market-making algorithms and engineered a trading system using SQLite transactions to guarantee atomic execution and 100% ledger accuracy."
            pills={['React', 'SQLite', 'Node.js']}
            status="Completed"
            statusType="archived"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
