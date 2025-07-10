export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">Micko</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#research" className="text-gray-600 hover:text-blue-600 transition-colors">
              Research
            </a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}