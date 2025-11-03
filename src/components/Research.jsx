import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { FileText, Calendar, Users, ExternalLink } from "lucide-react"

const researchPapers = [
  {
    id: 1,
    title: "AI in Student Learning- Analyzing its effect on Critical Thinking and Academic Integrity",
    authors: ["Lucas", "Reamillio", "Mejia","Torio"],

    year: "2024",
    abstract:
      "This paper examines how AI affects student learning, critical thingking, and academic integrity. It explores the benefits and challenges of AI in education, focusing on its impact on student engagement and ethical considerations...",
    keywords: ["AI", "Critical thingking", "Predictive Analytics", "Student Behavior"],
    url: "/documents/Group 8 Thesis Doc.pdf",
  },
  {
    id: 2,
    title: "Mirai Malware and Its Impact on IoT Security: Security",
    authors: ["Lucas", "Eugenio","Paglinawan"],
    year: "2024",
    abstract:
      "This research paper investigates the Mirai malware and its implications for IoT security. It analyzes the vulnerabilities exploited by Mirai, its propagation methods, and the resulting impact on IoT devices and networks...",
    keywords: ["Web Security", "Vulnerability Analysis", "Cybersecurity", "Iot Devices"],
    url: "/documents/Eugenio_Lucas_Paglinawan - BM3.docx.pdf",
  },
  {
    id: 3,
    title: "CUSTOMER QUEUING TIME IN RETAIL STORES: A CASE STUDY IN SM HYPERMARKET - SMDC JAZZ MALL",
    authors: ["Lucas", "Arenas","Ablat","Barrameda"],
    year: "2023",
    abstract:
      "This paper analyzes casualty trends in Customer queing time in retail stores particularly in SMDC Jazz Mall . It examines how these factors influence public perception and international response to the Customer queing Time...",
    keywords: ["E-Commerce", "Vulnerability Analysis", "Queuing", "Casuality in customer"],
    url: "/documents/PAPER 1 - ABLAT, ARENAS, EUGENIO, BARRAMEDA.pdf",
  },
]

export function Research() {
  return (
    <section id="research" className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Research Publications</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          My academic contributions to the field of Computer Science through research and publications
        </p>

        <div className="space-y-8">
          {researchPapers.map((paper) => (
            <Card key={paper.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">{paper.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {paper.authors.join(", ")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {paper.year}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">
                      Published in: <span className="font-medium">{paper.journal}</span>
                    </p>
                  </div>
                  <Badge
                    variant={paper.status === "Published" ? "default" : "secondary"}
                    className={paper.status === "Published" ? "bg-green-600" : ""}
                  >
                    {paper.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{paper.abstract}</p>

                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword) => (
                    <Badge key={keyword} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
 <a href={paper.url} download target="_blank" rel="noopener noreferrer">
  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
    <FileText className="mr-2 h-4 w-4" />
    Read Paper
  </Button>
</a>

</div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
