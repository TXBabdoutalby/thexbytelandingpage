"use client"

import type React from "react"

import { useEffect, useRef } from "react"

export default function GeometricBackground({
  children,
}: {
  children: React.ReactNode
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Draw geometric shapes
    const drawShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw squares in a grid
      const size = 100
      const gap = 400

      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          ctx.save()
          ctx.translate(x, y)
          ctx.rotate(Math.PI / 4) // 45 degrees rotation
          ctx.strokeStyle = "rgba(200, 200, 200, 0.1)"
          ctx.strokeRect(-size / 2, -size / 2, size, size)
          ctx.restore()
        }
      }
    }

    drawShapes()
    window.addEventListener("resize", drawShapes)

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      window.removeEventListener("resize", drawShapes)
    }
  }, [])

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

