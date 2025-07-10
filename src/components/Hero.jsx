import { Button } from "./ui/button"
import { Github, Linkedin, Mail, Download } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-blue-50 justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
           <img
           src="./micko.jpg"
          alt="Micko's profile"
          className="w-full h-full object-cover"
          />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Hi, Welcome to <span className="text-blue-600">Micko's</span> 👋
            Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Computer Science Student Specialization in Application Development
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          
         <a
          href="/Lucas,Micko Resume BSCS.pdf"
          download
          target="_blank"
             rel="noopener noreferrer"
          >
      <Button variant="outline" size="lg">
          <Download className="mr-2 h-4 w-4" />
         Download CV
        </Button>
      </a>


        </div>

        <div className="flex flex-col items-center space-y-4">
  <div className="flex items-center space-x-2 text-gray-600">
    <Github className="h-6 w-6" />
    <span>github.com/mickolucas</span>
  </div>

  <div className="flex items-center space-x-2 text-gray-600">
    <Linkedin className="h-6 w-6" />
    <span>www.linkedin.com/in/micko-lucas-b43258364</span>
  </div>

  <div className="flex items-center space-x-2 text-gray-600">
    <Mail className="h-6 w-6" />
    <span>micko.lucas7@gmail.com</span>
  </div>
</div>

      </div>
    </section>
  )
}