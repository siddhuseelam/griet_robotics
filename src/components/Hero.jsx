import React from 'react';
import {
  Bot,
  BrainCircuit,
  Cpu,
  Wrench,
  ArrowRight,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';

const clubLeads = [
  {
    name: 'Pranav Satya',
    role: 'President'
  },
  {
    name: 'CHUNCHU SRICHANAKYA',
    role: 'All Rounder'
  },
  {
    name: 'Siddhartha Reddy Seelam',
    role: 'Secretary'
  },
  {
    name: 'Vedanaparthi Tanusri',
    role: 'Technical Lead'
  },
  {
    name: 'Burugu Vaishnavi',
    role: 'Treasury Head'
  },
  {
    name: 'Akshitha Dyavanapelly',
    role: 'Documentation Lead'
  },
  {
    name: 'Vaishnavi Gondala',
    role: 'Documentation Lead'
  },
  {
    name: 'Manogna Nallavelli',
    role: 'Database Lead'
  },
  {
    name: 'srichaitanya',
    role: 'Documentation Jr. Lead'
  }
];

export default function Hero() {
  return (
    <div
      style={{
        backgroundColor: '#003049',
        color: '#FDF0D5',
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
            'linear-gradient(135deg, #003049 0%, #003049 55%, #780000 100%)'
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
              'radial-gradient(circle, rgba(102,155,188,0.25) 0%, rgba(0,48,73,0) 70%)',
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
              'radial-gradient(circle, rgba(193,18,31,0.18) 0%, rgba(0,48,73,0) 70%)',
            zIndex: 0
          }}
        />


        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 1,
            paddingTop: '4rem',
            paddingBottom: '4rem'
          }}
        >

          {/* Club Label */}

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1.5rem',
              color: '#669BBC',
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
              color: '#FDF0D5'
            }}
          >

            ROBOTICS

            <br />

            <span
              style={{
                color: '#C1121F'
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
              color: '#FDF0D5'
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
              color: '#669BBC'
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

            <Link
              to="/events"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '0.9rem 1.4rem',
                borderRadius: '8px',
                backgroundColor: '#C1121F',
                color: '#FDF0D5',
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '0.8rem',
                border: '1px solid #C1121F',
                transition: '0.25s ease'
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
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                padding: '0.9rem 1.4rem',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                color: '#FDF0D5',
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '0.8rem',
                border: '1px solid #669BBC',
                transition: '0.25s ease'
              }}
            >
              About Our Club
            </Link>

          </div>

        </div>

      </section>


      {/* =========================
          CLUB LEADS SECTION
      ========================== */}

      <section
        style={{
          padding: '5rem 0',
          backgroundColor: '#FDF0D5',
          color: '#003049'
        }}
      >

        <div className="container">

          {/* Section Heading */}

          <div
            style={{
              marginBottom: '2rem'
            }}
          >

            <p
              style={{
                marginBottom: '0.6rem',
                color: '#C1121F',
                fontSize: '0.75rem',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}
            >
              OUR TEAM
            </p>

            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                margin: 0,
                color: '#003049'
              }}
            >
              Club Leads
            </h2>

            <p
              style={{
                marginTop: '0.8rem',
                color: '#669BBC',
                fontSize: '0.9rem'
              }}
            >
              Meet the students leading the Robotics Club of GRIET.
            </p>

          </div>


          {/* Horizontal Scroll */}

          <div
            style={{
              display: 'flex',
              gap: '1.3rem',
              overflowX: 'auto',
              overflowY: 'hidden',
              paddingBottom: '1.5rem',
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >

            {clubLeads.map((lead, index) => (

              <div
                key={index}
                style={{
                  minWidth: '245px',
                  width: '245px',
                  flexShrink: 0,
                  border: '1px solid rgba(0,48,73,0.15)',
                  borderRadius: '16px',
                  backgroundColor: '#FFFFFF',
                  overflow: 'hidden',
                  boxShadow: '0 8px 25px rgba(0,48,73,0.08)'
                }}
              >

                {/* Blank Image Area */}

                <div
                  style={{
                    height: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background:
                      'linear-gradient(135deg, #003049, #669BBC)',
                    color: '#FDF0D5'
                  }}
                >

                  <div
                    style={{
                      width: '85px',
                      height: '85px',
                      borderRadius: '50%',
                      border: '2px solid rgba(253,240,213,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >

                    <User size={42} />

                  </div>

                </div>


                {/* Details */}

                <div
                  style={{
                    padding: '1.2rem'
                  }}
                >

                  <h3
                    style={{
                      margin: 0,
                      marginBottom: '0.7rem',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                      color: '#003049'
                    }}
                  >
                    {lead.name}
                  </h3>


                  <div
                    style={{
                      display: 'inline-block',
                      padding: '0.45rem 0.7rem',
                      borderRadius: '20px',
                      backgroundColor: '#780000',
                      color: '#FDF0D5',
                      fontSize: '0.65rem',
                      lineHeight: 1.4
                    }}
                  >
                    {lead.role}
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

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
        border: '1px solid rgba(102,155,188,0.45)',
        borderRadius: '999px',
        backgroundColor: 'rgba(102,155,188,0.08)',
        color: '#FDF0D5',
        fontSize: '0.7rem'
      }}
    >

      <span
        style={{
          color: '#669BBC',
          display: 'flex'
        }}
      >
        {icon}
      </span>

      {text}

    </div>

  );
}