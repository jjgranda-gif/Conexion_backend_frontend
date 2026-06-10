import type { Task } from '../App'
import './TaskItem.css'

interface TaskItemProps {
  task: Task
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

const priorityLabel: Record<Task['priority'], string> = {
  Alta: 'alta',
  Media: 'media',
  Baja: 'baja',
}

function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className={`task-item ${task.completed ? 'task-item--done' : ''}`}>
      <button
        className={`task-check ${task.completed ? 'task-check--done' : ''}`}
        onClick={() => onToggle(task.id)}
        title="Marcar como completada"
      >
        {task.completed ? '✓' : ''}
      </button>
      <div className="task-info">
        <span className={`task-title ${task.completed ? 'task-title--done' : ''}`}>
          {task.title}
        </span>
        <span className={`task-priority task-priority--${priorityLabel[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      <span className={`task-status ${task.completed ? 'status--done' : 'status--pending'}`}>
        {task.completed ? 'Completada' : 'Pendiente'}
      </span>
      <button
        className="task-delete"
        onClick={() => onDelete(task.id)}
        title="Eliminar tarea"
      >
        ✕
      </button>
    </div>
  )
}

export default TaskItem
