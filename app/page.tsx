import Contact from '@/components/Contact';
import About from '@/components/About';
'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Journey from '@/components/Journey';
import Footer from '@/components/Footer';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  return (
    <>
      <Navbar>
      <main className="main-container">
        <div className="content-wrapper">
          <Hero>
          <Projects>
          <Skills>
          <Journey
            currentRole={portfolioData.currentRole}
            experience={portfolioData.experience}
            about={portfolioData.about}
            highlights={portfolioData.highlights ?? []}
          />
          <Footer>
        </div>
      </main>
    </>
  );
}