import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import teamData from '../assets/teamData.json';
import TeamMemberCard from './TeamMemberCard';

export default function HomeTeam() {
  // Filter leads based on domain keywords
  const leads = teamData.filter(member => {
    if (!member.Domain) return false;
    const domain = member.Domain.toLowerCase();
    return domain.includes('lead') || 
           domain.includes('head') || 
           domain.includes('president') || 
           domain.includes('secretary');
  });

  // Duplicate leads for infinite scroll effect
  const displayLeads = [...leads, ...leads, ...leads];

  const scrollRef = useRef(null);
  const autoScrollTimeoutRef = useRef(null);
  const [isManualOverride, setIsManualOverride] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    let isHovering = false;

    const scroll = () => {
      if (!isHovering && !isManualOverride) {
        container.scrollLeft += 1;
      }
      
      // Manage infinite loop boundaries seamlessly
      const singleSetWidth = container.scrollWidth / 3;
      if (container.scrollLeft >= singleSetWidth * 1.5) {
        container.scrollLeft -= singleSetWidth;
      } else if (container.scrollLeft <= 0 && isManualOverride) {
        container.scrollLeft += singleSetWidth;
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    container.addEventListener('mouseenter', () => (isHovering = true));
    container.addEventListener('mouseleave', () => (isHovering = false));

    return () => cancelAnimationFrame(animationId);
  }, [isManualOverride]);

  const handleManualScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    setIsManualOverride(true);
    
    // Scroll left or right
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    // Clear existing timeout
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }

    // Resume auto scroll after 3 seconds of inactivity
    autoScrollTimeoutRef.current = setTimeout(() => {
      setIsManualOverride(false);
    }, 3000);
  };

  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#073b55', // Updated to match the premium surface dark aesthetic instead of the previous bright color
        color: 'var(--papaya-whip)',
        borderTop: '1px solid rgba(var(--steel-blue-rgb), 0.25)'
      }}
    >
      <div className="container">
        {/* Section Heading with Nav Buttons */}
        <div style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p
              style={{
                marginBottom: '0.6rem',
                color: 'var(--brick-red)',
                fontSize: '0.75rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: "'Zen Dots', sans-serif"
              }}
            >
              OUR TEAM
            </p>

            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                margin: 0,
                color: 'var(--papaya-whip)',
                fontFamily: "'Zen Dots', sans-serif"
              }}
            >
              Club Leads
            </h2>

            <p
              style={{
                marginTop: '0.8rem',
                color: 'var(--steel-blue)',
                fontSize: '0.9rem',
                fontFamily: "'Zen Dots', sans-serif"
              }}
            >
              Meet the students leading the Robotics Club of GRIET.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button
              onClick={() => handleManualScroll('left')}
              style={{
                background: 'rgba(var(--steel-blue-rgb), 0.15)',
                border: '1px solid rgba(var(--steel-blue-rgb), 0.35)',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--papaya-whip)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brick-red)';
                e.currentTarget.style.borderColor = 'var(--brick-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(var(--steel-blue-rgb), 0.15)';
                e.currentTarget.style.borderColor = 'rgba(var(--steel-blue-rgb), 0.35)';
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              style={{
                background: 'rgba(var(--steel-blue-rgb), 0.15)',
                border: '1px solid rgba(var(--steel-blue-rgb), 0.35)',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--papaya-whip)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brick-red)';
                e.currentTarget.style.borderColor = 'var(--brick-red)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(var(--steel-blue-rgb), 0.15)';
                e.currentTarget.style.borderColor = 'rgba(var(--steel-blue-rgb), 0.35)';
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="hide-scrollbar"
          style={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            overflowY: 'hidden',
            paddingBottom: '2rem',
            paddingTop: '0.5rem',
            scrollBehavior: isManualOverride ? 'smooth' : 'auto', // only smooth for manual clicks
            WebkitOverflowScrolling: 'touch',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
          }}
        >
          {displayLeads.map((lead, index) => (
            <TeamMemberCard key={index} member={lead} />
          ))}
        </div>
      </div>
    </section>
  );
}
