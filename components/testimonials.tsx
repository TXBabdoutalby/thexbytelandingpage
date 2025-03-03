"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      position: "CTO",
      company: "TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "TheXbyte transformed our business with their automation solutions! The team was professional and delivered beyond expectations.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      position: "CEO",
      company: "InnovateTech",
      image: "/placeholder.svg?height=100&width=100",
      quote:
        "Outstanding service and technical expertise. Their AI solutions helped us achieve remarkable efficiency improvements.",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      position: "Director of Engineering",
      company: "SecureNet",
      image: "/placeholder.svg?height=100&width=100",
      quote: "The cybersecurity solutions provided by TheXbyte have given us peace of mind. Highly recommended!",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((currentIndex + newDirection + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Success stories from businesses we've helped transform</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full"
              >
                <Card className="bg-white/80 backdrop-blur-sm p-8 md:p-12">
                  <div className="relative">
                    <Quote className="absolute -top-6 -left-6 h-12 w-12 text-gray-200" />
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                        "{testimonials[currentIndex].quote}"
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                        <p className="text-primary font-medium">{testimonials[currentIndex].company}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-primary scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 hidden lg:flex"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 hidden lg:flex"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

