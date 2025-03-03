import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      description: "Enterprise-level analytics solution with machine learning capabilities",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "IoT Smart Factory System",
      description: "Industrial automation system for manufacturing efficiency",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Secure Banking Platform",
      description: "Digital banking solution with advanced security measures",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground">Explore our successful projects and innovative solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="w-full object-cover aspect-video"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

