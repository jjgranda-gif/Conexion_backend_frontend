import type { Task } from '../App'
import TaskForm from '../componentes/TaskForm'
import TaskList from '../componentes/TaskList'
import './Tasks.css'

interface TasksProps {
  tasks: Task[]
  onAdd: (title: string, priority: Task['priority']) => void
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function Tasks({ tasks, onAdd, onToggle, onDelete }: TasksProps) {
  return (
    <div className="tasks-page">
      <div className="page-header">
        <h1 className="page-title">Mis Tareas</h1>
        <p className="page-sub">Gestiona y organiza tu trabajo</p>
      </div>
      <TaskForm onAdd={onAdd} />
      <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
    </div>
  )
}

export default Tasks
