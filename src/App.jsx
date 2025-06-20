import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import ProjectsSection from './components/ProjectsSection'
import ContactMeSection from './components/ContactMeSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      
        <Navbar />
        <main>
          <HeroSection />
          <About />
          <ProjectsSection />
          <ContactMeSection />
        </main>
        <Footer />
    </>
  )
}

export default App
