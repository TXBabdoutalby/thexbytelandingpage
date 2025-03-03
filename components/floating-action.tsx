"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export default function FloatingAction() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-background rounded-lg shadow-lg p-4 mb-4 border">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Quick Contact</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Have a question? Send us a message and we'll get back to you shortly.
          </p>
          <Button className="w-full" onClick={() => (window.location.href = "#contact")}>
            Contact Us
          </Button>
        </div>
      )}
      <Button size="lg" className="rounded-full h-14 w-14 shadow-lg" onClick={() => setIsOpen(!isOpen)}>
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}

