import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Achievement from './Achievement'

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <HeroSection />
      <About />
      <Experience />
      <Achievement />
      <Projects />
    </div>
  )
}
