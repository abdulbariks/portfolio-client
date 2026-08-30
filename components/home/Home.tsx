import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Experience from "./Experience";
import Achievement from "./Achievement";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contract from "./Contract";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Experience />
      <Education />
      <Achievement />
      <Skills />
      <Projects />
      <Contract />
    </div>
  );
}
