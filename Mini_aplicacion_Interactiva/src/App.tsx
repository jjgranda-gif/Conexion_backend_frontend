import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Home from './Pages/Home'
import Tasks from './Pages/Tasks'
import Stats from './Pages/Stats'
import { taskService } from './services/taskService'
import './App.css'

export interface Task {
  id: number
  title: string
  priority: 'Alta' | 'Media' | 'Baja'
  completed: boolean
  description?: string
  category?: string
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  // Cargar tareas del backend al iniciar
  useEffect(() => {
    taskService.getAll().then(setTasks)
  }, [])

  const addTask = async (title: string, priority: Task['priority']) => {
    const newTask = await taskService.create(title, priority)
    setTasks(prev => [...prev, newTask])
  }

  const toggleTask = async (id: number) => {
    const task = tasks.find(t => t.id === id)!
    const updated = await taskService.update(id, { completed: !task.completed })
    setTasks(prev => prev.map(t => t.id === id ? updated : t))
  }

  const deleteTask = async (id: number) => {
    await taskService.delete(id)
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                onAdd={addTask}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            }
          />
          <Route path="/stats" element={<Stats tasks={tasks} />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
