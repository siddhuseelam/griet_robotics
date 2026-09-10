import React from 'react';
import { Code, Link, Mail } from 'lucide-react';

const defaultTeam = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Club President / Hardware Lead',
    imageSrc: '/images/team_placeholder_1.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Software Architecture Lead',
    imageSrc: '/images/team_placeholder_2.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'David Okafor',
    role: 'Mechanical Design Lead',
    imageSrc: '/images/team_placeholder_3.jpg',
    github: '#',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Emily Wu',
    role: 'Outreach Coordinator',
    imageSrc: '/images/team_placeholder_4.jpg',
    github: '#',
    linkedin: '#',
  }
];

export default function TeamSection({ team = defaultTeam }) {
  return (
    <section className="section" id="team">
      <div className="container">
        <h2 className="section-title">The Team</h2>
        
        <div className="grid grid-cols-4">
          {team.map(member => (
            <div key={member.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                backgroundColor: 'var(--surface-border)',
                backgroundImage: `url(${member.imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                marginBottom: '1.5rem',
                border: '4px solid var(--surface)',
                boxShadow: '0 0 0 2px var(--primary)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                 {/* Fallback text if image doesn't load/exist yet */}
                 <span style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem'
                }}>Avatar</span>
              </div>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>{member.name}</h3>
              <p className="text-secondary font-mono" style={{ fontSize: '0.85rem', marginBottom: '1rem', color: 'var(--primary)' }}>
                {member.role}
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)' }}>
                <a href={member.github} style={{ color: 'inherit' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
                  <Code size={18} />
                </a>
                <a href={member.linkedin} style={{ color: 'inherit' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
                  <Link size={18} />
                </a>
                <a href="#" style={{ color: 'inherit' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}>
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
