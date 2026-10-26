import Background from './components/Background'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import GitHubStats from './components/GitHubStats'
import CurrentlyLearning from './components/CurrentlyLearning'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <CustomCursor />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <GitHubStats />
        <CurrentlyLearning />
        <Contact />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
