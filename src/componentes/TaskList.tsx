import type { Task } from '../App'
import TaskItem from './TaskItem'
import './TaskList.css'

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="tasklist-empty">
        <span>📭</span>
        <p>No hay tareas aún. ¡Agrega tu primera tarea!</p>
      </div>
    )
  }

  return (
    <div className="tasklist">
      <div className="tasklist-header">
        <h2>Mis Tareas</h2>
        <span className="tasklist-count">{tasks.length} tareas</span>
      </div>
      <div className="tasklist-items">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskList
