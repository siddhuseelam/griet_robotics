import React from 'react';
import {
  Bot,
  BrainCircuit,
  Cpu,
  Lightbulb,
  Wrench,
  Rocket
} from 'lucide-react';

export default function InventoryList() {
  return (
    <section className="section" id="about">

      <div className="container">

        <h2 className="section-title">
          About Robotics Club
        </h2>

        <div
          style={{
            maxWidth: '850px',
            marginBottom: '3rem'
          }}
        >

          <p
            className="text-secondary"
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}
          >
            The Robotics Club at GRIET is a community of students
            passionate about robotics, artificial intelligence,
            electronics, automation and innovation.
          </p>

          <p
            className="text-secondary"
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              marginTop: '1rem'
            }}
          >
            Through workshops, projects, competitions and
            collaborative learning, the club provides students
            with opportunities to transform ideas into real-world
            robotic systems.
          </p>

        </div>

        <h3
          style={{
            fontSize: '1.5rem',
            marginBottom: '1.5rem'
          }}
        >
          What to Expect
        </h3>

        <div
          className="grid grid-cols-3"
          style={{
            gap: '1.5rem'
          }}
        >

          <Feature
            icon={<BrainCircuit size={28} />}
            title="Robotics + AI"
            text="Explore how artificial intelligence can make robots smarter and more capable."
          />

          <Feature
            icon={<Cpu size={28} />}
            title="Hands-on Learning"
            text="Learn by building, experimenting and working with real robotics concepts."
          />

          <Feature
            icon={<Wrench size={28} />}
            title="Build & Experiment"
            text="Turn your ideas into practical projects through experimentation and teamwork."
          />

          <Feature
            icon={<Lightbulb size={28} />}
            title="Innovation"
            text="Think creatively and develop innovative solutions to real-world problems."
          />

          <Feature
            icon={<Rocket size={28} />}
            title="Future Skills"
            text="Develop technical and problem-solving skills for next-generation technologies."
          />

          <Feature
            icon={<Bot size={28} />}
            title="Robotics Community"
            text="Connect with students who share your interest in robotics and AI."
          />

        </div>

      </div>

    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div
      className="card"
      style={{
        padding: '1.5rem'
      }}
    >

      <div
        style={{
          color: 'var(--primary)',
          marginBottom: '1rem'
        }}
      >
        {icon}
      </div>

      <h4
        style={{
          marginBottom: '0.7rem'
        }}
      >
        {title}
      </h4>

      <p
        className="text-secondary"
        style={{
          lineHeight: 1.6,
          fontSize: '0.9rem'
        }}
      >
        {text}
      </p>

    </div>
  );
}