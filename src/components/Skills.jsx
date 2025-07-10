import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code, Database, Cloud, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS", "Next.js", "Vue.js"],
    color: "text-blue-600",
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js","PHP", "Laravel",],
    color: "text-green-600",
  },
  
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["VS Code","Postman", "Figma", "Git", "GitHub", "Docker","Jira",],
    color: "text-orange-600",
  },

  {
    title: "Database Management",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL",],
    color: "text-orange-600",
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Technical Skills</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-3 ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{category.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
