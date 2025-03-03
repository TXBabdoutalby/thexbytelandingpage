import { Lightbulb, Shield, Zap, Scale } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Protecting your digital assets with advanced measures",
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Optimizing processes for maximum performance",
    },
    {
      icon: Scale,
      title: "Scalability",
      description: "Growing solutions that evolve with your business",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-muted-foreground">
            At TheXbyte, we specialize in custom software development, IoT automation, cybersecurity, and AI-powered
            solutions. Our goal is to help businesses innovate, optimize, and secure their digital environments. With a
            strong focus on scalability and security, we empower startups and enterprises to thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-background rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

