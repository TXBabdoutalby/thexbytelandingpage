"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"])
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(8px)"])

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-16%20at%201.00.42%20AM-eWyNj92W0koiYhuMdD2gasrVStfqlv.jpeg"
              alt="TheXbyte Logo"
              width={40}
              height={40}
              className="w-auto h-8"
            />
            <span className="text-xl font-semibold">TheXbyte</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#services" className="text-foreground/80 hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-foreground/80 hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get a Free Consultation
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-sm rounded-lg mb-2">
              <Link
                href="#about"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#portfolio"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-foreground/80 hover:text-foreground rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90">Get a Free Consultation</Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

