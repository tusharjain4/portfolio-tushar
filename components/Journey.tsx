'use client';

import React from 'react';

// The portfolio.json does not contain journey data, so we use template placeholders.
// The template requires this section to be present.
const Journey: React.FC = () => {
  const journeyItems = [
    {
      institution: 'University of India',
      period: '1920 - 1924',
      description: 'Specializes in developing robust design systems for enterprise applications, ensuring consistent user experiences and highly efficient development workflows.',
      icon: '/assets/images/img_icon_building_2.svg',
      line: '/assets/images/img_line_container.svg',
    },
    {
      institution: 'University of India',
      period: '1920 - 1924',
      description: 'Specializes in developing robust design systems for enterprise applications, ensuring consistent user experiences and highly efficient development workflows.',
      icon: '/assets/images/img_icon_building_2.svg',
      line: '/assets/images/img_line_container.svg',
    },
  ];

  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">My Journey</h2>

        <div className="journey-list" role="list">
          {journeyItems.map((item, index) => (
            <article className="journey-item" role="listitem" key={`journey-item-${index}`}>
              <div className="journey-header">
                <div className="journey-icon">
                  <img src={item.icon} alt="University icon" />
                </div>
                <div className="journey-info">
                  <h3 className="journey-institution">{item.institution}</h3>
                  <p className="journey-period">{item.period}</p>
                </div>
              </div>
              <div className="journey-details">
                <img src={item.line} alt="" className="journey-line" />
                <p className="journey-description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;