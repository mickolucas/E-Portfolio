import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App