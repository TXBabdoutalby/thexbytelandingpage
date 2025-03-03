"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const springConfig = { stiffness: 100, damping: 20 }
  const mouseX = useSpring(0, springConfig)
  const mouseY = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const { innerWidth, innerHeight } = window

      // Convert mouse position to normalized coordinates (-1 to 1)
      const normalizedX = (clientX / innerWidth) * 2 - 1
      const normalizedY = (clientY / innerHeight) * 2 - 1

      mouseX.set(normalizedX * 20) // Adjust multiplier for effect intensity
      mouseY.set(normalizedY * 20)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 via-gray-50 to-white"
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${i * 10}%`,
                top: "50%",
                width: "1px",
                height: "100%",
                background: "linear-gradient(to bottom, transparent, #666, transparent)",
                transform: "rotate(15deg)",
              }}
              animate={{
                y: [0, 100, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Logo */}
      <motion.div style={{ y, opacity, scale, rotate }} className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[150%] max-w-none aspect-square">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-16%20at%201.00.42%20AM-eWyNj92W0koiYhuMdD2gasrVStfqlv.jpeg"
            alt="TheXbyte Logo Background"
            fill
            className="object-contain opacity-[0.15]"
            priority
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container relative z-20 px-4 py-32 text-center">
        {/* Floating Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            x: mouseX,
            y: mouseY,
          }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-16%20at%201.00.42%20AM-eWyNj92W0koiYhuMdD2gasrVStfqlv.jpeg"
              alt="TheXbyte Logo"
              width={200}
              height={200}
              className="w-auto h-32 md:h-40 drop-shadow-2xl"
              priority
            />
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 opacity-30 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-8"
        >
          <div className="absolute -inset-x-4 -inset-y-2 bg-white/50 backdrop-blur-sm rounded-2xl -z-10" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
            Innovating the Future:
            <br />
            <span className="text-primary">Smart, Secure, and Scalable</span>
            <br />
            Tech Solutions
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600 font-medium"
        >
          The byte that makes the difference®
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Get a Free Consultation
            <motion.div
              className="inline-block ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowRight className="h-5 w-5" />
            </motion.div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group border-2 border-gray-700 text-gray-700 px-8 py-6 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-50"
          >
            Explore Our Services
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-500 rounded-full p-1"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="w-1 h-2 bg-gray-500 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}

