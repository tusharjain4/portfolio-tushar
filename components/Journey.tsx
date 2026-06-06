'use client';

import React from 'react';

interface JourneyProps {
  currentRole: string;
  experience: number;
  about: string;
  highlights: string[];
}

const Journey: React.FC<JourneyProps> = ({ currentRole, experience, about, highlights }) => {
  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">My Journey</h2>

        <div className="journey-list" role="list">
          {/* Journey Item 1: Current Role & Experience */}
          <article className="journey-item" role="listitem">
            <div className="journey-header">
              <div className="journey-icon">
                <img src="/assets/images/img_icon_building_2.svg" alt="Work icon" />
              </div>
              <div className="journey-info">
                <h3 className="journey-institution">{currentRole}</h3>
                <p className="journey-period">{experience} years experience</p>
              </div>
            </div>
            <div className="journey-details">
              <img src="/assets/images/img_line_container.svg" alt="" className="journey-line" />
              <p className="journey-description">{about}</p>
            </div>
          </article>

          {/* Journey Item 2: Highlights */}
          {highlights.length > 0 && (
            <article className="journey-item" role="listitem">
              <div className="journey-header">
                <div className="journey-icon">
                  <img src="/assets/images/img_icon_building_2.svg" alt="Achievements icon" />
                </div>
                <div className="journey-info">
                  <h3 className="journey-institution">Key Achievements</h3>
                  <p className="journey-period">Recent Highlights</p>
                </div>
              </div>
              <div className="journey-details">
                <img src="/assets/images/img_line_container.svg" alt="" className="journey-line" />
                <p className="journey-description">
                  {highlights.map((highlight, index) => (
                    <React.Fragment key={index}>
                      {highlight}
                      {index < highlights.length - 1 ? '. ' : ''}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
};

export default Journey;