import React from 'react';
import {
  Bot,
  BrainCircuit,
  Cpu,
  Wrench,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="section"
      id="home"
      style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '-25%',
          right: '-10%',
          width: '700px',
          height: '700px',
          background:
            'radial-gradient(circle, rgba(0,255,204,0.14) 0%, rgba(13,17,23,0) 70%)',
          zIndex: 0
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1
        }}
      >

        {/* Club label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1.5rem',
            color: 'var(--primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          <Bot size={20} />

          <span>
            Gokaraju Rangaraju Institute of Engineering and Technology
          </span>
        </div>


        {/* Main heading */}
        <h1
          style={{
            fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: '1.5rem'
          }}
        >
          ROBOTICS
          <br />

          <span className="text-accent">
            CLUB
          </span>
        </h1>


        {/* Club description */}
        <p
          style={{
            fontSize: '1.4rem',
            maxWidth: '750px',
            lineHeight: 1.5,
            marginBottom: '1rem'
          }}
        >
          Imagine. Engineer. Innovate.
        </p>

        <p
          className="text-secondary"
          style={{
            fontSize: '1.05rem',
            maxWidth: '700px',
            lineHeight: 1.8,
            marginBottom: '2rem'
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

          <Skill icon={<Bot size={17} />} text="Robotics" />

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

  <Link
    to="/events"
    className="btn btn-primary"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      textDecoration: 'none'
    }}
  >
    Explore Events

    <ArrowRight
      size={18}
      style={{
        marginLeft: '0.5rem'
      }}
    />
  </Link>


  <Link
    to="/about"
    className="btn btn-outline"
    style={{
      textDecoration: 'none'
    }}
  >
    About Our Club
  </Link>

</div>

      </div>

    </section>
  );
}


function Skill({ icon, text }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.65rem 1rem',
        border: '1px solid var(--surface-border)',
        borderRadius: '999px',
        background: 'rgba(255,255,255,0.03)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem'
      }}
    >

      <span
        style={{
          color: 'var(--primary)',
          display: 'flex'
        }}
      >
        {icon}
      </span>

      {text}

    </div>
  );
}