import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Experience from './Experience'
import Achievement from './Achievement'
import Education from './Education'
import Projects from './Projects'

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <HeroSection />
      <About />
      <Experience />
       <Education />
      <Achievement />
      <Projects />
    </div>
  )
}
