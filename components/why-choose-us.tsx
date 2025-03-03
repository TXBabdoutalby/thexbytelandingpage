import { Zap, Code, Shield, Scale } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: "Fast & Reliable Development",
      description: "Agile methodology ensures quick delivery",
    },
    {
      icon: Code,
      title: "Expertise in Modern Tech",
      description: "Full-stack development, IoT, AI, and cybersecurity",
    },
    {
      icon: Shield,
      title: "Security-First Approach",
      description: "Built-in security measures to protect data",
    },
    {
      icon: Scale,
      title: "Scalable Solutions",
      description: "Solutions that grow with your business",
    },
  ]

  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground">
            We deliver excellence through innovation, expertise, and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
              <div className="inline-block p-3 bg-primary/10 rounded-lg mb-4">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

