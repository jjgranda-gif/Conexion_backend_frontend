import type { Task } from '../App'
import './Stats.css'

interface StatsProps {
  tasks: Task[]
}

function Stats({ tasks }: StatsProps) {
  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const pending = total - completed
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0

  const byPriority = {
    Alta: tasks.filter(t => t.priority === 'Alta').length,
    Media: tasks.filter(t => t.priority === 'Media').length,
    Baja: tasks.filter(t => t.priority === 'Baja').length,
  }

  return (
    <div className="stats-page">
      <div className="page-header">
        <h1 className="page-title">Estadísticas</h1>
        <p className="page-sub">Visualiza tu progreso</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card stat-card--total">
         
          <div className="stat-num">{total}</div>
          <div className="stat-label">Total de tareas</div>
        </div>
        <div className="stat-card stat-card--done">
         
          <div className="stat-num">{completed}</div>
          <div className="stat-label">Completadas</div>
        </div>
        <div className="stat-card stat-card--pending">
        
          <div className="stat-num">{pending}</div>
          <div className="stat-label">Pendientes</div>
        </div>
      </div>

      <div className="stats-progress-card">
        <div className="progress-header">
          <span>Progreso general</span>
          <span className="progress-percent">{percent}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>
        {total === 0 && (
          <p className="stats-empty">Aún no tienes tareas. ¡Ve a la página de tareas para empezar!</p>
        )}
      </div>

      <div className="stats-priority-card">
        <h3>Por prioridad</h3>
        <div className="priority-rows">
          {(['Alta', 'Media', 'Baja'] as Task['priority'][]).map(p => (
            <div className="priority-row" key={p}>
              <span className={`prio-dot prio-dot--${p.toLowerCase()}`} />
              <span className="prio-name">{p}</span>
              <span className="prio-count">{byPriority[p]} tareas</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
