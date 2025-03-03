import { Users, ArrowUpRight, Clock, LineChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Resources() {
  const resources = [
    {
      icon: Users,
      title: "Custom-Tailored Team Assignments",
      description: "Dedicated experts for each project",
    },
    {
      icon: ArrowUpRight,
      title: "Scalable Resource Management",
      description: "Flexibility to scale up or down based on project needs",
    },
    {
      icon: LineChart,
      title: "Cost-Effective Solutions",
      description: "Optimized team distribution for budget efficiency",
    },
    {
      icon: Clock,
      title: "Real-Time Project Monitoring",
      description: "Continuous updates on resource utilization and project status",
    },
  ]

  return (
    <section className="py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Resource Allocation</h2>
          <p className="text-lg text-muted-foreground">Efficient resource management to ensure project success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{resource.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

