"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const progress = (scrolled / scrollHeight) * 100
      setProgress(progress)
    }

    window.addEventListener("scroll", updateProgress)
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-primary transition-all duration-200" style={{ width: `${progress}%` }} />
    </div>
  )
}

