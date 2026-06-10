import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <h1 className="home-title">Sistemas de<br /><span>Tareas</span></h1>
      <p className="home-desc">
        Organiza tus actividades diarias, controla prioridades y visualiza tu progreso en tiempo real.
      </p>
      <div className="home-buttons">
        <button className="btn-primary" onClick={() => navigate('/tasks')}>
          <span>→</span> Ir a Tareas
        </button>
        <button className="btn-secondary" onClick={() => navigate('/stats')}>
          Ver Estadísticas
        </button>
      </div>
      <div className="home-cards">
        <div className="home-card">
        
          <h3>Gestiona tareas</h3>
          <p>Agrega, completa y elimina tus tareas fácilmente</p>
        </div>
        <div className="home-card">
        
          <h3>Prioridades</h3>
          <p>Clasifica por Alta, Media o Baja prioridad</p>
        </div>
        <div className="home-card">
         
          <h3>Estadísticas</h3>
          <p>Visualiza tu progreso y productividad</p>
        </div>
      </div>
    </div>
  )
}

export default Home