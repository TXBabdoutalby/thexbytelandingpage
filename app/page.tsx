import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Services from "@/components/services"
import Resources from "@/components/resources"
import WhyChooseUs from "@/components/why-choose-us"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import FloatingAction from "@/components/floating-action"
import GeometricBackground from "@/components/geometric-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <GeometricBackground>
        <main>
          <Hero />
          <About />
          <Services />
          <Resources />
          <WhyChooseUs />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
      </GeometricBackground>
      <Footer />
      <FloatingAction />
    </div>
  )
}

