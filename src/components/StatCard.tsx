interface StatCardProps {
  label: string
  value: string
  unit?: string
  detail: string
  icon?: string
}

function StatCard({ label, value, unit, detail, icon }: StatCardProps) {
  return (
    <div className="stat-card">
      <p className="stat-card__label">{label}</p>
      {icon && <span className="stat-card__icon">{icon}</span>}
      <p className="stat-card__value">
        {value}
        {unit && <sub>{unit}</sub>}
      </p>
      <p className="stat-card__detail">{detail}</p>
    </div>
  )
}

export default StatCard
