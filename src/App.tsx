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
  const backgroundPattern = {
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
    backgroundRepeat: "repeat",
  };

  const projectsRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-bpri text-tpri relative overflow-hiddenn nunito-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={backgroundPattern}>
        </div>
      </div>

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
