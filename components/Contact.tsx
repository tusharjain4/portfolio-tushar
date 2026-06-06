'use client';

// The template does not contain a standalone "Contact" section.
// Contact information (email) is integrated into the Footer.
// Therefore, this component is not used in app/page.tsx to avoid adding
// a section not present in the original template.
// It is included here as a placeholder if a separate Contact section were to be added.

import React from 'react';

interface ContactProps {
  email: string;
  linkedin: string;
}

const Contact: React.FC<ContactProps> = ({ email, linkedin }) => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-text">Feel free to reach out!</p>
        <div className="contact-links">
          <a href={`mailto:${email}`} className="contact-email-link">{email}</a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-linkedin-link">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;