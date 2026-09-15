import React from 'react';

import {
  Calendar,
  MapPin,
  ArrowRight
} from 'lucide-react';

import { Link } from 'react-router-dom';


const events = [
  {
    title: 'NEXT-GEN ROBOTICS',
    subtitle: 'A 2-Day Workshop',

    date: '18th – 19th September 2026',

    location: 'Hall 1, GRIET Campus',

    description:
      'A two-day workshop exploring the exciting intersection of Robotics and Artificial Intelligence.'
  }
];


export default function EventGallery() {

  return (

    <section
      className="section"
      id="events"
    >

      <div className="container">

        <p
          className="text-accent font-mono"
          style={{
            marginBottom: '0.7rem'
          }}
        >
          ROBOTICS CLUB, GRIET
        </p>


        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            marginBottom: '0.7rem'
          }}
        >
          Events
        </h1>


        <p
          className="text-secondary"
          style={{
            maxWidth: '650px',
            lineHeight: 1.7,
            marginBottom: '3rem'
          }}
        >
          Explore workshops, competitions, technical sessions
          and other activities conducted by the GRIET Robotics Club.
        </p>


        {/* Event cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >

          {events.map((event, index) => (

            <div
              key={event.title}
              className="card"
              style={{
                padding: '2rem'
              }}
            >

              <p
                className="text-accent font-mono"
                style={{
                  fontSize: '0.8rem',
                  marginBottom: '1rem'
                }}
              >
                EVENT {String(index + 1).padStart(2, '0')}
              </p>


              <h2
                style={{
                  fontSize: '1.8rem',
                  marginBottom: '0.4rem'
                }}
              >
                {event.title}
              </h2>


              <p
                style={{
                  marginBottom: '1.5rem'
                }}
              >
                {event.subtitle}
              </p>


              <p
                className="text-secondary"
                style={{
                  lineHeight: 1.7,
                  marginBottom: '1.5rem'
                }}
              >
                {event.description}
              </p>


              {/* Date */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem'
                }}
              >

                <Calendar size={17} />

                {event.date}

              </div>


              {/* Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem'
                }}
              >

                <MapPin size={17} />

                {event.location}

              </div>


              {/* Details button */}
              <Link
                to="/events/next-gen-robotics"
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  textDecoration: 'none'
                }}
              >

                View Event Details

                <ArrowRight
                  size={18}
                  style={{
                    marginLeft: '0.5rem'
                  }}
                />

              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}