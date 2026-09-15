import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, History } from 'lucide-react';

export default function EventGallery() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '5rem 0',
        background: '#003049',
        color: '#FDF0D5'
      }}
    >
      <div className="container">

        {/* =========================
            PAGE HEADER
        ========================== */}
        <div
          style={{
            marginBottom: '4rem',
            maxWidth: '800px'
          }}
        >
          <p
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              color: '#C1121F',
              fontSize: '0.8rem',
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}
          >
            ROBOTICS CLUB · GRIET
          </p>

          <h1
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              marginBottom: '1rem',
              lineHeight: 1.1
            }}
          >
            EVENTS
          </h1>

          <p
            style={{
              color: '#669BBC',
              fontSize: '1.05rem',
              lineHeight: 1.8,
              maxWidth: '700px'
            }}
          >
            Discover our upcoming activities and explore the
            events that have shaped the Robotics Club of GRIET.
          </p>
        </div>


        {/* =========================
            UPCOMING EVENTS
        ========================== */}
        <div style={{ marginBottom: '5rem' }}>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              marginBottom: '1.5rem'
            }}
          >
            <CalendarDays
              size={24}
              color="#C1121F"
            />

            <h2
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                margin: 0,
                fontSize: '1.5rem'
              }}
            >
              Upcoming Event
            </h2>
          </div>


          {/* Upcoming Event Card */}
          <div
            style={{
              border: '1px solid rgba(102,155,188,0.35)',
              borderRadius: '20px',
              padding: '2.5rem',
              background:
                'linear-gradient(135deg, rgba(0,48,73,0.95), rgba(120,0,0,0.25))',
              boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
            }}
          >

            <div
              style={{
                display: 'inline-block',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                background: '#C1121F',
                color: '#FDF0D5',
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '0.65rem',
                marginBottom: '1.5rem'
              }}
            >
              UPCOMING
            </div>


            <h3
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: 'clamp(1.7rem, 4vw, 3rem)',
                marginBottom: '1rem',
                lineHeight: 1.2
              }}
            >
              Next-Gen Robotics
            </h3>


            {/* ONLY MAIN DESCRIPTION HERE */}
            <p
              style={{
                color: '#669BBC',
                fontSize: '1.05rem',
                lineHeight: 1.8,
                maxWidth: '750px',
                marginBottom: '2rem'
              }}
            >
              Join us for an exciting robotics workshop focused on
              learning, innovation, technology and hands-on exploration.
              Discover what the next generation of robotics has to offer.
            </p>


            {/* Details button */}
            <Link
              to="/events/next-gen-robotics"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.9rem 1.4rem',
                background: '#C1121F',
                color: '#FDF0D5',
                textDecoration: 'none',
                borderRadius: '8px',
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '0.75rem',
                transition: '0.25s ease'
              }}
            >
              View Event Details
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>


        {/* =========================
            PAST EVENTS
        ========================== */}
        <div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              marginBottom: '1.5rem'
            }}
          >
            <History
              size={24}
              color="#C1121F"
            />

            <h2
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                margin: 0,
                fontSize: '1.5rem'
              }}
            >
              Past Events
            </h2>
          </div>


          <PastEventCard 
            title="Transforming IoT Ideas to Robotics Reality"
            description="Our first-ever Robotics Club event was a blend of ideas, technology and teamwork — our very first step into the future. A two-day experience of innovation, hands-on learning and creativity with brilliant minds."
            images={[
              "/images/gallery1.jpg",
              "/images/gallery2.jpg",
              "/images/gallery3.jpg"
            ]}
          />

        </div>
      </div>
    </section>
  );
}

function PastEventCard({ title, description, images }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      style={{
        border: '1px solid rgba(102,155,188,0.35)',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(7,59,85,0.95), rgba(0,48,73,0.95))',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        transform: isExpanded ? 'scale(1.02)' : 'scale(1)',
        borderColor: isExpanded ? 'rgba(102,155,188,0.8)' : 'rgba(102,155,188,0.35)'
      }}
      onMouseEnter={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.borderColor = 'rgba(102,155,188,0.8)';
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(102,155,188,0.25)';
        }
      }}
      onMouseLeave={(e) => {
        if (!isExpanded) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.borderColor = 'rgba(102,155,188,0.35)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
        }
      }}
    >
      {/* Interactive Horizontal Image Scroll */}
      <div
        className="hide-scrollbar"
        style={{
          display: 'flex',
          gap: '2px',
          height: isExpanded ? '350px' : '180px', // Small when not expanded
          overflowX: 'auto',
          overflowY: 'hidden',
          scrollBehavior: 'smooth',
          transition: 'height 0.4s ease'
        }}
      >
        {images.map((imgSrc, index) => (
          <div key={index} style={{ flexShrink: 0, width: isExpanded ? '400px' : '280px', overflow: 'hidden' }}>
            <img
              src={imgSrc}
              alt={`Event photo ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.5s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            />
          </div>
        ))}
      </div>

      {/* Past Event Information */}
      <div style={{ padding: isExpanded ? '2.5rem' : '1.5rem 2rem', transition: 'padding 0.4s ease' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: isExpanded ? '1.2rem' : '0' }}>
          <div>
            <p
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                display: 'inline-block',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                background: 'rgba(102,155,188,0.15)',
                color: '#669BBC',
                fontSize: '0.65rem',
                letterSpacing: '1px',
                marginBottom: '1rem',
                border: '1px solid rgba(102,155,188,0.3)'
              }}
            >
              COMPLETED EVENT
            </p>
            
            <h3
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: isExpanded ? '1.8rem' : '1.3rem',
                color: '#FDF0D5',
                margin: 0,
                lineHeight: 1.3,
                transition: 'font-size 0.4s ease'
              }}
            >
              {title}
            </h3>
          </div>
          
          <div style={{
            color: '#C1121F',
            fontFamily: "'Zen Dots', sans-serif",
            fontSize: '0.75rem',
            marginTop: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(193,18,31,0.1)',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            transition: 'background 0.3s ease'
          }}>
            {isExpanded ? 'Collapse' : 'Expand'} <ArrowRight size={16} style={{ transform: isExpanded ? 'rotate(-90deg)' : 'rotate(90deg)', transition: 'transform 0.3s ease' }} />
          </div>
        </div>

        {/* Expandable Description */}
        <div style={{ 
          maxHeight: isExpanded ? '200px' : '0', 
          opacity: isExpanded ? 1 : 0, 
          overflow: 'hidden',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <p
            style={{
              color: '#91adbb',
              lineHeight: 1.8,
              fontSize: '1rem',
              maxWidth: '850px',
              margin: 0,
              paddingTop: '1rem'
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}