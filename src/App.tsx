import './App.css'
import Hero from './components/hero'
import { Projects } from './components/projects'
import { TechStack } from './components/techStack'

function App() {

  return (
    <div className="bg-bpri text-tpri">
      <Hero />
      <TechStack />
      <Projects /> 
    </div>
  )
}

export default App
