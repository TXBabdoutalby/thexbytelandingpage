"use client"

import { Code2, Cpu, Cloud, Shield, Brain } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Web and mobile applications with robust, scalable, and efficient architectures.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Cpu,
      title: "IoT & Automation",
      description: "Smart device integration, industrial automation, and home automation solutions.",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud-native solutions, CI/CD, Kubernetes, Docker, and scalable infrastructures.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity & Penetration Testing",
      description: "Security audits, penetration testing, and risk assessment for businesses.",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Brain,
      title: "AI & Data Analytics",
      description: "Machine learning and AI-powered insights to drive smarter decision-making.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="container px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive technology solutions tailored to your business needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative h-full p-6 overflow-hidden group transition-all duration-300 hover:shadow-2xl border-0 bg-white"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-current opacity-10 rounded-lg transform rotate-6 transition-transform group-hover:rotate-12" />
                      <div className="relative p-4 bg-white rounded-lg shadow-md">
                        <service.icon
                          className={`h-8 w-8 transition-colors duration-300 ${
                            hoveredIndex === index ? `text-gradient-${service.gradient}` : "text-gray-700"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4 group-hover:text-gray-900">{service.title}</h3>

                  <p className="text-gray-600 group-hover:text-gray-700">{service.description}</p>

                  <motion.div
                    className="mt-6 flex items-center text-gray-700 font-medium"
                    initial={false}
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

