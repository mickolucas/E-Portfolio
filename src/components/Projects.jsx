import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Github, ExternalLink } from "lucide-react"
import complaintImg from "../assets/complaint.png"
import whatscookingImg from "../assets/whatscooking.png"
import dishImg from "../assets/dish.png"

const projects = [
  {
    id: 1,
    title: "Barangay Complaint System",
    description:
      "The Barangay Complaint System is a web-based application designed to help residents of Sta. Cruz Barangay efficiently file, track, and resolve local complaints directly with their barangay officials. It streamlines communication, reduces paperwork, and enhances transparency within the barangay governance process.",
    image: complaintImg,
    technologies: ["Laravel", "Blade", "PHP", "Routing", "Authentication", "MySQL"],
    githubUrl: "https://github.com/mickolucas/Sta.Cruz-Complaint-System.git",
    liveUrl: "https://lightsalmon-cheetah-948360.hostingersite.com/",
    featured: true,
  },
  {
    id: 2,
    title: "What’s Cooking?",
    description:
      "“What’s Cooking?” is a recipe-sharing and food discovery web app designed to connect home cooks and food enthusiasts. Users can input available ingredients, and the app intelligently suggests a variety of dishes they can prepare. It encourages creativity in the kitchen, helps minimize food wasted and make your daily lives easy.",
    image: whatscookingImg,
    technologies: ["Laravel", "PHP", "Blade", "Authentication", "Routing", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com/mickolucas/whatscooking.git",
    liveUrl: "", // No live demo, so button will not appear
    featured: true,
  },
  {
    id: 3,
    title: "My Favorite Dish",
    description:
      "This was one of my earliest projects from The Odin Project, where I created a simple static webpage to showcase my favorite dish. The main objective was to understand the fundamentals of web development — learning how to structure content using HTML, apply styling through CSS, and organize elements effectively on a webpage.",
    image: dishImg,
    technologies: ["HTML", "CSS"],
    githubUrl: "https://github.com/mickolucas/odin-recipes.git",
    liveUrl: "https://gregarious-kitsune-95d56a.netlify.app/",
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Featured Projects</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Here are some of my recent projects that showcase my technical skills and problem-solving abilities
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-blue-600">Featured</Badge>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  {/* GitHub button */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>

                  {/* Conditionally show Live Demo button only if liveUrl exists */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
