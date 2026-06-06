'use client';

// The template does not contain an explicit "About" section with a distinct title
// and content separate from the Hero's description.
// The Hero component already renders portfolioData.about.
// Therefore, this component is not used in app/page.tsx to avoid duplication
// and adhere to the template's structure.
// It is included here as a placeholder if a separate About section were to be added.

import React from 'react';

interface AboutProps {
  aboutText: string;
  // Add other props if needed, e.g., experience, highlights
}

const About: React.FC<AboutProps> = ({ aboutText }) => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">{aboutText}</p>
        {/* Add more about content here if the template had it */}
      </div>
    </section>
  );
};

export default About;