import React from 'react';
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


          {/* Past Event */}
          <div
            style={{
              border: '1px solid rgba(102,155,188,0.35)',
              borderRadius: '20px',
              overflow: 'hidden',
              background: 'rgba(0,48,73,0.75)'
            }}
          >

            {/* Images */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '4px'
              }}
            >

              <img
                src="/images/gallery1.jpg"
                alt="Robotics Club past event"
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              <img
                src="/images/gallery2.jpg"
                alt="Robotics Club past event"
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              <img
                src="/images/gallery3.jpg"
                alt="Robotics Club past event"
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

            </div>


            {/* Past Event Information */}
            <div
              style={{
                padding: '2rem'
              }}
            >

              <p
                style={{
                  fontFamily: "'Zen Dots', sans-serif",
                  color: '#C1121F',
                  fontSize: '0.7rem',
                  letterSpacing: '1px',
                  marginBottom: '0.8rem'
                }}
              >
                PAST EVENT
              </p>

              <h3
                style={{
                  fontFamily: "'Zen Dots', sans-serif",
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  lineHeight: 1.4
                }}
              >
                Transforming IoT Ideas to Robotics Reality
              </h3>

              <p
                style={{
                  color: '#669BBC',
                  lineHeight: 1.8,
                  maxWidth: '850px',
                  margin: 0
                }}
              >
                Our first-ever Robotics Club event was a blend of ideas,
                technology and teamwork — our very first step into the future.
                A two-day experience of innovation, hands-on learning and
                creativity with brilliant minds.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}