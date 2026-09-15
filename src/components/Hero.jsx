import React from 'react';
import {
  Bot,
  BrainCircuit,
  Cpu,
  Wrench,
  ArrowRight,
  User
} from 'lucide-react';
import { Button } from './ui/Button';

import HomeTeam from './HomeTeam';

export default function Hero() {
  return (
    <div
      style={{
        backgroundColor: 'var(--deep-space-blue)',
        color: 'var(--papaya-whip)',
        fontFamily: "'Zen Dots', sans-serif"
      }}
    >

      {/* =========================
          HERO SECTION
      ========================== */}

      <section
        className="section"
        id="home"
        style={{
          minHeight: '88vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background:
            'linear-gradient(135deg, var(--deep-space-blue) 0%, var(--deep-space-blue) 55%, var(--molten-lava) 100%)'
        }}
      >

        {/* Background Glow */}

        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '650px',
            height: '650px',
            background:
              'radial-gradient(circle, rgba(var(--steel-blue-rgb), 0.25) 0%, rgba(var(--deep-space-blue-rgb), 0) 70%)',
            zIndex: 0
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle, rgba(var(--brick-red-rgb), 0.18) 0%, rgba(var(--deep-space-blue-rgb), 0) 70%)',
            zIndex: 0
          }}
        />


        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 1,
            paddingTop: '2rem',
            paddingBottom: '2rem',
            marginTop: '-4rem'
          }}
        >

          {/* Club Label */}

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1.5rem',
              color: 'var(--steel-blue)',
              fontSize: '0.8rem',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >

            <Bot size={20} />

            <span>
              Gokaraju Rangaraju Institute of Engineering and Technology
            </span>

          </div>


          {/* Main Heading */}

          <h1
            style={{
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              marginBottom: '1.5rem',
              color: 'var(--papaya-whip)'
            }}
          >

            ROBOTICS

            <br />

            <span
              style={{
                color: 'var(--steel-blue)'
              }}
            >
              CLUB
            </span>

          </h1>


          {/* Tagline */}

          <p
            style={{
              fontSize: '1.35rem',
              maxWidth: '750px',
              lineHeight: 1.5,
              marginBottom: '1rem',
              color: 'var(--papaya-whip)'
            }}
          >
            Imagine. Engineer. Innovate.
          </p>


          {/* Description */}

          <p
            style={{
              fontSize: '1rem',
              maxWidth: '700px',
              lineHeight: 1.8,
              marginBottom: '2rem',
              color: 'var(--steel-blue)'
            }}
          >
            Welcome to the Robotics Club of GRIET — a community
            where students explore robotics, artificial intelligence,
            electronics, automation and emerging technologies
            through learning, experimentation and innovation.
          </p>


          {/* Areas */}

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              marginBottom: '2.5rem'
            }}
          >

            <Skill
              icon={<Bot size={17} />}
              text="Robotics"
            />

            <Skill
              icon={<BrainCircuit size={17} />}
              text="Artificial Intelligence"
            />

            <Skill
              icon={<Cpu size={17} />}
              text="Embedded Systems"
            />

            <Skill
              icon={<Wrench size={17} />}
              text="Innovation"
            />

          </div>


          {/* Buttons */}

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >

            <Button to="/events" variant="default" size="lg">

              Explore Events

              <ArrowRight
                size={18}
                style={{
                  marginLeft: '0.5rem'
                }}
              />

            </Button>


            <Button to="/about" variant="outline" size="lg">
              About Our Club
            </Button>

          </div>

        </div>

      </section>


      {/* =========================
          CLUB LEADS SECTION
      ========================== */}

      <HomeTeam />

    </div>
  );
}


/* =========================
   SKILL COMPONENT
========================= */

function Skill({ icon, text }) {

  return (

    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.65rem 1rem',
        border: '1px solid rgba(var(--steel-blue-rgb), 0.45)',
        borderRadius: '999px',
        backgroundColor: 'rgba(var(--steel-blue-rgb), 0.08)',
        color: 'var(--papaya-whip)',
        fontSize: '0.7rem'
      }}
    >

      <span
        style={{
          color: 'var(--steel-blue)',
          display: 'flex'
        }}
      >
        {icon}
      </span>

      {text}

    </div>

  );
}