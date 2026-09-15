import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, CalendarDays, ArrowRight, X, History } from 'lucide-react';
import { Button } from './ui/Button';

export default function EventGallery() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '5rem 0',
        background: 'var(--deep-space-blue)',
        color: 'var(--papaya-whip)'
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
              color: 'var(--brick-red)',
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
              color: 'var(--steel-blue)',
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
              color="var(--steel-blue)"
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
              border: '1px solid rgba(var(--steel-blue-rgb), 0.35)',
              borderRadius: '20px',
              padding: '2.5rem',
              background:
                'linear-gradient(135deg, rgba(var(--deep-space-blue-rgb), 0.95), rgba(var(--molten-lava-rgb), 0.25))',
              boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
            }}
          >

            <div
              style={{
                display: 'inline-block',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                background: 'var(--brick-red)',
                color: 'var(--papaya-whip)',
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
                color: 'var(--steel-blue)',
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
                background: 'var(--brick-red)',
                color: 'var(--papaya-whip)',
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
              color="var(--steel-blue)"
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredImage = images[0];

  return (
    <>
      <div
      className="past-event-card"
      style={{
        border: '1px solid rgba(var(--steel-blue-rgb), 0.35)',
        borderRadius: '20px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(var(--deep-space-blue-rgb), 0.95), rgba(var(--deep-space-blue-rgb), 0.95))',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.borderColor = 'rgba(var(--steel-blue-rgb), 0.8)';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(var(--steel-blue-rgb), 0.25)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(var(--steel-blue-rgb), 0.35)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
        const img = e.currentTarget.querySelector('img');
        if (img) img.style.transform = 'scale(1)';
      }}
    >
      {/* Featured Image */}
      <div className="past-event-image-container">
        <img
          src={featuredImage}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        
        {/* Subtle overlay for the image */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, rgba(var(--deep-space-blue-rgb), 0) 0%, rgba(var(--deep-space-blue-rgb), 0.8) 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      {/* Past Event Information */}
      <div style={{ 
        flex: 1, 
        padding: '2.5rem', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center' 
      }}>
        
        <div style={{ marginBottom: '1.2rem' }}>
          <p
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              display: 'inline-block',
              padding: '0.45rem 0.9rem',
              borderRadius: '999px',
              background: 'rgba(var(--steel-blue-rgb), 0.15)',
              color: 'var(--steel-blue)',
              fontSize: '0.65rem',
              letterSpacing: '1px',
              marginBottom: '1rem',
              border: '1px solid rgba(var(--steel-blue-rgb), 0.3)'
            }}
          >
            COMPLETED EVENT
          </p>
          
          <h3
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
              color: 'var(--papaya-whip)',
              margin: 0,
              lineHeight: 1.3
            }}
          >
            {title}
          </h3>
        </div>

        <p
          style={{
            color: '#91adbb',
            lineHeight: 1.8,
            fontSize: '1rem',
            maxWidth: '850px',
            margin: 0
          }}
        >
          {description}
        </p>

        <Button 
          variant="outline"
          size="sm"
          style={{
            marginTop: '1.5rem',
            width: 'fit-content'
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        >
          View Highlights <ArrowRight size={16} style={{ marginLeft: '0.4rem' }} />
        </Button>
      </div>
    </div>

    {/* Event Highlights Modal */}
    {isModalOpen && (
      <div 
        onClick={() => setIsModalOpen(false)}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,30,45,0.9)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}
      >
        <div 
          onClick={(e) => e.stopPropagation()}
          className="hide-scrollbar"
          style={{
            background: 'linear-gradient(135deg, rgba(var(--deep-space-blue-rgb), 0.98), rgba(var(--deep-space-blue-rgb), 0.98))',
            borderRadius: '20px',
            maxWidth: '1000px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            border: '1px solid rgba(var(--steel-blue-rgb), 0.35)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(var(--brick-red-rgb), 0.15)',
              border: '1px solid rgba(var(--brick-red-rgb), 0.4)',
              color: 'var(--papaya-whip)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'var(--brick-red)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(var(--brick-red-rgb), 0.15)'}
          >
            <X size={24} />
          </button>
          
          {/* Image Gallery */}
          <div 
            className="hide-scrollbar" 
            style={{ 
              display: 'flex', 
              overflowX: 'auto', 
              gap: '4px', 
              height: 'clamp(250px, 40vh, 450px)',
              width: '100%',
              backgroundColor: '#001a2c'
            }}
          >
            {images.map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`Event highlight ${i+1}`} 
                style={{ 
                  height: '100%', 
                  width: 'auto', 
                  objectFit: 'contain',
                  flexShrink: 0
                }} 
              />
            ))}
          </div>

          {/* Modal Content */}
          <div style={{ padding: 'clamp(2rem, 5vw, 3.5rem)' }}>
            <p
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                display: 'inline-block',
                padding: '0.45rem 0.9rem',
                borderRadius: '999px',
                background: 'rgba(var(--steel-blue-rgb), 0.15)',
                color: 'var(--steel-blue)',
                fontSize: '0.65rem',
                letterSpacing: '1px',
                marginBottom: '1rem',
                border: '1px solid rgba(var(--steel-blue-rgb), 0.3)'
              }}
            >
              EVENT HIGHLIGHTS
            </p>
            <h3 
              style={{ 
                fontFamily: "'Zen Dots', sans-serif", 
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', 
                color: 'var(--papaya-whip)', 
                marginBottom: '1.5rem',
                lineHeight: 1.2
              }}
            >
              {title}
            </h3>
            <p 
              style={{ 
                color: '#c5d4dc', 
                lineHeight: 1.8, 
                fontSize: '1.05rem', 
                margin: 0,
                maxWidth: '900px'
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  );
}