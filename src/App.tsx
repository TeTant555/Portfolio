import { useRef } from 'react'
import './App.css'
import AboutMe from './components/aboutMe'
import Contact from './components/contact'
import Education from './components/education'
import Experience from './components/experience'
import FeaturedProject from './components/featuredProject'
import Hero from './components/hero'
import { Projects } from './components/projects'
import { TechStack } from './components/techStack'

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-bpri text-tpri relative overflow-hidden nunito-sans">
      <Hero
        onProjectClick={scrollToProjects}
        onAboutClick={scrollToAbout} />
      <TechStack
        onProjectClick={scrollToProjects} />
      <div ref={projectsRef} id="projects">
        <Projects /> 
      </div>
      <FeaturedProject />
      <Experience />
      <Education />
      <Contact />

      <div ref={aboutRef}>
        <AboutMe />
      </div>
    </div>
  )
}

export default App
