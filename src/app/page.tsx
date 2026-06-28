import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import WhatIDo from "./_components/WhatIDo";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import ResumeCTA from "./_components/ResumeCTA";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <Skills />
        <Projects />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
