interface ProjectCardProps {
  icon?: string
  title: string
  description: string
  pills: string[]
  status?: string
  statusType?: 'production' | 'beta' | 'archived'
}

function ProjectCard({
  icon = '◇',
  title,
  description,
  pills,
  status,
  statusType,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-card__header">
        <span className="project-card__icon">{icon}</span>
        {status && (
          <span
            className={`status-badge${
              statusType ? ` status-badge--${statusType}` : ''
            }`}
          >
            {status}
          </span>
        )}
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      <div className="project-card__pills">
        {pills.map((pill) => (
          <span key={pill} className="pill">
            {pill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
