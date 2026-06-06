'use client';

import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import About from '@/components/About';
'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import Journey from '@/components/Journey';
import Footer from '@/components/Footer';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  // Adapt role for Hero component's two-pill structure
  const adaptedRole = "Design System Engineer"; // As per coach's suggestion and template structure

  return (
    <>
      <Navbar name={portfolioData.name} />
      <main className="main-container">
        <div className="content-wrapper">
          <Hero
            name={portfolioData.name}
            role={adaptedRole}
            about={portfolioData.about}
          />
          <Works projects={portfolioData.projects ?? []} />
          <Skills skills={portfolioData.skills ?? []} />
          <Journey /> {/* Journey section uses template placeholders as no data in JSON */}
          <Footer email={portfolioData.contact.email} />
        </div>
      </main>
    </>
  );
}