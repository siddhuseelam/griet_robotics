import React, { useState } from 'react';
import teamData from '../assets/teamData.json';
import TeamMemberCard from './TeamMemberCard';

export default function Members() {
  const [filter, setFilter] = useState('All');

  // Ensure no empty members
  const validMembers = teamData.filter(m => m.Name && m.Domain);
  
  // Extract unique domains for the filter
  const allDomains = Array.from(new Set(validMembers.map(m => m.Domain.trim().toLowerCase())));
  const groupedDomains = {
    'All': validMembers,
    'Creative & Design': validMembers.filter(m => m.Domain.toLowerCase().includes('design') || m.Domain.toLowerCase().includes('creative')),
    'Technical': validMembers.filter(m => m.Domain.toLowerCase().includes('tech')),
    'Documentation': validMembers.filter(m => m.Domain.toLowerCase().includes('document')),
    'Event Management': validMembers.filter(m => m.Domain.toLowerCase().includes('event')),
    'Database': validMembers.filter(m => m.Domain.toLowerCase().includes('data')),
    'Public Relations': validMembers.filter(m => m.Domain.toLowerCase().includes('pr') || m.Domain.toLowerCase().includes('publicity')),
    'Core': validMembers.filter(m => m.Domain.toLowerCase().includes('president') || m.Domain.toLowerCase().includes('secretary') || m.Domain.toLowerCase().includes('treasury') || m.Domain.toLowerCase().includes('all rounder'))
  };

  const currentMembers = groupedDomains[filter] || validMembers;

  return (
    <div style={{ backgroundColor: 'var(--deep-space-blue)', minHeight: '100vh', paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              marginBottom: '1rem',
              color: 'var(--papaya-whip)',
              fontFamily: "'Zen Dots', sans-serif"
            }}
          >
            Meet the Team
          </h1>
          <p
            style={{
              color: 'var(--steel-blue)',
              fontSize: '1rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontFamily: "'Zen Dots', sans-serif"
            }}
          >
            The passionate individuals who drive the Robotics Club of GRIET.
          </p>
        </div>

        {/* Filter Navigation */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '0.8rem', 
            marginBottom: '3rem' 
          }}
        >
          {Object.keys(groupedDomains).map(key => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              style={{
                background: filter === key ? 'linear-gradient(135deg, var(--brick-red), var(--molten-lava))' : 'transparent',
                color: 'var(--papaya-whip)',
                border: filter === key ? '1px solid var(--brick-red)' : '1px solid var(--steel-blue)',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: filter === key ? '0 6px 20px rgba(var(--brick-red-rgb), 0.25)' : 'none'
              }}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Grid of members */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(245px, 1fr))',
            gap: '2rem',
            justifyItems: 'center'
          }}
        >
          {currentMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

      </div>
    </div>
  );
}
