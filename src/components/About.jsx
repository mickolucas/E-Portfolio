import { Card, CardContent } from "./ui/card"
import { GraduationCap, Code, SearchIcon as Research } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I am a passionate web developer with a strong passion for creating innovative and user-friendly digital 
              solutions. I have a keen interest in exploring new development tools and technologies, constantly seeking 
              ways to enhance my skills and stay up-to date with industry trends. In my free time, I enjoy immersing myself 
              in both playing and watching games, finding inspiration in the creativity and technical ingenuity they showcase. 
              I am highly motivated to grow as a developer and thrive in dynamic environments that encourage continuous 
              learning, collaboration, and innovation.  


            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
               <strong>AREAS OF INTEREST</strong>
               <br></br>
               Computer Science|Application Development|Web Development|

            </p>
          </div>

          <div className="grid gap-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <h3 className="text-gray-600">Mapua University</h3>
                <p className="text-gray-600">Computer Science Student</p>
                <p className="text-sm text-gray-500">Specialization of Application Development</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Code className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">Development</h3>
                </div>
                <p className="text-gray-600">junior Developer</p>
                <p className="text-sm text-gray-500">React, Node.js, Laravel, PHP, HTML, CSS, TailWind CSS, MySQL</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Research className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold">Research</h3>
                </div>
                <p className="text-gray-600">Academic Research Handled</p>
                <p className="text-sm text-gray-500">AI in Student Learning, Threats and Defense Mechanisms, Examining Trends in Casualties</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}