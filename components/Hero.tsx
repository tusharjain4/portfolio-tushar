'use client';

import portfolio from '@/data/portfolio.json';

function splitRole(role: string): { line1: string; line2: string } {
  const words = role.trim().split(/\s+/).filter(Boolean);
  if (!words.length) return { line1: 'Product', line2: 'Designer' };
  if (words.length === 1) return { line1: words[0], line2: '' };
  if (words.length === 2) return { line1: words[0], line2: words[1] };
  const mid = Math.ceil(words.length / 2);
  return {
    line1: words.slice(0, mid).join(' '),
    line2: words.slice(mid).join(' '),
  };
}

export default function Hero() {
  const { name, role, about, heroImageUrl } = portfolio;
  const { line1, line2 } = splitRole(role || '');
  const heroSrc = heroImageUrl || '/assets/images/img_rectangle_1.png';

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text-container">
            <h2 className="hero-hello">Hello</h2>
            <p className="hero-im">I&apos;m</p>
          </div>
          <p className="scroll-text">Scroll to explore</p>
          <img
            src={heroSrc}
            alt={(name || 'Portfolio') + ' showcase'}
            className="hero-image"
          />
        </div>
        <div className="hero-right">
          <div className="title-stack">
            <div className="title-role-row">
              {line1 ? (
                <span className="role-pill role-pill-top title-product">Developer</span>
              ) : null}
              {line2 ? (
                <span className="role-pill role-pill-bottom title-designer">Developer</span>
              ) : null}
            </div>
            <p className="title-nikita">Portfolio Builder</p>
          </div>
          {about ? <p className="hero-description">Specializes in developing robust design systems for enterprise applications, ensuring consistent user experiences and highly efficient development workflows.</p> : null}
        </div>
      </div>
    </section>
  );
}
