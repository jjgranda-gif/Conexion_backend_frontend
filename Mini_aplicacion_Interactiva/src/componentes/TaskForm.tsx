import { useState } from 'react'
import type { Task } from '../App'
import './TaskForm.css'

interface TaskFormProps {
  onAdd: (title: string, priority: Task['priority']) => void
}

function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [priority, setPriority] = useState<Task['priority']>('Media')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) {
      setError('Por favor ingresa un nombre para la tarea.')
      return
    }
    onAdd(title.trim(), priority)
    setTitle('')
    setPriority('Media')
    setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Nueva Tarea</h2>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="task-title">Nombre de la tarea</label>
          <input
            id="task-title"
            type="text"
            placeholder="Ej: Estudiar React..."
            value={title}
            onChange={e => {
              setTitle(e.target.value)
              if (error) setError('')
            }}
          />
          {error && <span className="form-error">{error}</span>}
        </div>
        <div className="form-field form-field--sm">
          <label htmlFor="task-priority">Prioridad</label>
          <select
            id="task-priority"
            value={priority}
            onChange={e => setPriority(e.target.value as Task['priority'])}
          >
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>
        </div>
        <button type="submit" className="form-submit">
          + Agregar
        </button>
      </div>
    </form>
  )
}

export default TaskForm
