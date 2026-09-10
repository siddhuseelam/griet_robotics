import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

// Example data structure - can be passed via props for modularity
const defaultEvents = [
  {
    id: 1,
    title: 'National Hackathon 2025',
    date: 'Oct 15, 2025',
    location: 'Main Auditorium',
    imageSrc: '/images/event_placeholder_1.jpg',
    description: 'Our team competed against 50 other universities and secured 2nd place with our autonomous drone project.'
  },
  {
    id: 2,
    title: 'RoboWars Alpha',
    date: 'Nov 02, 2025',
    location: 'Engineering Quad',
    imageSrc: '/images/event_placeholder_2.jpg',
    description: 'The annual battle bot competition. Heavyweight division finals.'
  },
  {
    id: 3,
    title: 'Intro to Arduino Workshop',
    date: 'Dec 10, 2025',
    location: 'Lab 3B',
    imageSrc: '/images/event_placeholder_3.jpg',
    description: 'Teaching freshmen the basics of microcontrollers, sensors, and basic motor control.'
  }
];

export default function EventGallery({ events = defaultEvents }) {
  return (
    <section className="section" id="events">
      <div className="container">
        <h2 className="section-title">Previous Events</h2>
        
        <div className="grid grid-cols-3">
          {events.map(event => (
            <div key={event.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ 
                height: '200px', 
                backgroundColor: 'var(--surface-border)',
                backgroundImage: `url(${event.imageSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                {/* Fallback text if image doesn't load/exist yet */}
                <span style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem'
                }}>Image Placeholder</span>
              </div>
              
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{event.title}</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem', fontSize: '0.9rem' }} className="text-secondary font-mono">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={14} className="text-accent" /> {event.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={14} className="text-accent" /> {event.location}
                  </div>
                </div>
                
                <p style={{ fontSize: '0.95rem', marginTop: 'auto' }} className="text-secondary">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
