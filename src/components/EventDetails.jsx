import React from 'react';

import {
  Calendar,
  Clock,
  MapPin,
  Users,
  IndianRupee,
  Award,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

import { Link } from 'react-router-dom';


export default function EventDetails() {

  return (
    <section className="section">

      <div className="container">

        {/* Back */}
        <Link
          to="/events"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            marginBottom: '2rem',
            fontFamily: 'var(--font-mono)'
          }}
        >

          <ArrowLeft size={18} />

          Back to Events

        </Link>


        {/* Event heading */}
        <div
          style={{
            marginBottom: '3rem'
          }}
        >

          <p
            className="text-accent font-mono"
            style={{
              marginBottom: '0.8rem'
            }}
          >
            ROBOTICS CLUB × AI/ML DEPARTMENT
          </p>


          <h1
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              lineHeight: 1,
              marginBottom: '1rem'
            }}
          >
            NEXT-GEN
            <br />

            <span className="text-accent">
              ROBOTICS
            </span>
          </h1>


          <p
            style={{
              fontSize: '1.3rem'
            }}
          >
            A 2-Day Workshop
          </p>

        </div>


        {/* Event information */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >

          <Info
            icon={<Calendar size={21} />}
            title="Date"
            value="18th – 19th September 2026"
          />

          <Info
            icon={<Clock size={21} />}
            title="Timings"
            value="9:00 AM – 3:30 PM"
          />

          <Info
            icon={<MapPin size={21} />}
            title="Venue"
            value="Hall 1, GRIET Campus"
          />

          <Info
            icon={<Users size={21} />}
            title="Team Size"
            value="4 – 6 Members"
          />

          <Info
            icon={<IndianRupee size={21} />}
            title="Registration"
            value="₹1200 Per Team"
          />

          <Info
            icon={<Award size={21} />}
            title="Certificate"
            value="Provided to all participants"
          />

        </div>


        {/* About */}
        <div
          style={{
            maxWidth: '850px'
          }}
        >

          <h2
            style={{
              marginBottom: '1rem'
            }}
          >
            About the Workshop
          </h2>


          <p
            className="text-secondary"
            style={{
              lineHeight: 1.8,
              marginBottom: '1rem'
            }}
          >
            Ever wondered what happens when Robotics meets
            Artificial Intelligence? It’s time to stop just
            watching the future and start building it!
          </p>


          <p
            className="text-secondary"
            style={{
              lineHeight: 1.8,
              marginBottom: '1rem'
            }}
          >
            Get ready for 2 days of learning, building,
            experimenting and innovation as we step into the
            world of next-generation robotics.
          </p>


          <p
            className="text-secondary"
            style={{
              lineHeight: 1.8,
              marginBottom: '1rem'
            }}
          >
            Whether you're already into robotics or just curious
            about how machines can think, move and interact —
            this workshop is for you!
          </p>


          <p
            style={{
              fontWeight: 600,
              marginTop: '2rem',
              marginBottom: '2rem'
            }}
          >
            🚨 Gather your squad. Bring your curiosity.
            Build something amazing.
          </p>


          {/* Register */}
          <a
            href="https://forms.gle/oZ1LaBSqneapcQAf6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
          >

            Register Now

            <ArrowRight
              size={18}
              style={{
                marginLeft: '0.5rem'
              }}
            />

          </a>

        </div>

      </div>

    </section>
  );
}


function Info({ icon, title, value }) {

  return (

    <div
      className="card"
      style={{
        padding: '1.3rem'
      }}
    >

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--primary)',
          marginBottom: '0.7rem'
        }}
      >

        {icon}

        <span
          className="font-mono"
          style={{
            fontSize: '0.8rem'
          }}
        >
          {title}
        </span>

      </div>


      <strong>
        {value}
      </strong>

    </div>

  );
}