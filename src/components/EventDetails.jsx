import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  IndianRupee,
  Award,
  ClipboardList,
  Phone,
  Mail
} from 'lucide-react';

export default function EventDetails() {
  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '5rem 0',
        background: '#003049',
        color: '#FDF0D5'
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '1050px'
        }}
      >

        {/* BACK TO EVENTS */}
        <Link
          to="/events"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#669BBC',
            textDecoration: 'none',
            fontFamily: "'Zen Dots', sans-serif",
            fontSize: '0.7rem',
            marginBottom: '3rem'
          }}
        >
          <ArrowLeft size={16} />
          Back to Events
        </Link>


        {/* EVENT HEADER */}
        <div
          style={{
            marginBottom: '3rem'
          }}
        >

          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              backgroundColor: '#C1121F',
              color: '#FDF0D5',
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: '0.65rem',
              letterSpacing: '1px',
              marginBottom: '1.5rem'
            }}
          >
            UPCOMING EVENT
          </div>


          <h1
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: 'clamp(2.3rem, 6vw, 5rem)',
              lineHeight: 1.15,
              marginBottom: '1.5rem'
            }}
          >
            Next-Gen Robotics
          </h1>


          <p
            style={{
              color: '#669BBC',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              maxWidth: '850px',
              margin: 0
            }}
          >
            A 2-day robotics workshop designed to bring students
            together for hands-on learning, innovation, creativity
            and practical exploration of next-generation robotics.
          </p>

        </div>


        {/* =========================
            EVENT INFORMATION
        ========================== */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >

          <InfoCard
            icon={<CalendarDays size={22} />}
            title="DATE"
            value="18th – 19th September 2026"
          />

          <InfoCard
            icon={<Clock size={22} />}
            title="TIME"
            value="9:00 AM – 3:30 PM"
          />

          <InfoCard
            icon={<MapPin size={22} />}
            title="VENUE"
            value="Hall 1, GRIET Campus"
          />

          <InfoCard
            icon={<Users size={22} />}
            title="TEAM SIZE"
            value="4 – 6 Members"
          />

          <InfoCard
            icon={<IndianRupee size={22} />}
            title="REGISTRATION FEE"
            value="₹1200 per team"
          />

          <InfoCard
            icon={<Award size={22} />}
            title="CERTIFICATES"
            value="For all participants"
          />

        </div>


        {/* =========================
            ABOUT EVENT
        ========================== */}

        <div
          style={{
            border: '1px solid rgba(102,155,188,0.35)',
            borderRadius: '20px',
            padding: '2.5rem',
            backgroundColor: 'rgba(0,48,73,0.7)',
            marginBottom: '2rem'
          }}
        >

          <h2
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            About the Event
          </h2>


          <p
            style={{
              color: '#669BBC',
              lineHeight: 1.9,
              marginBottom: '1.2rem'
            }}
          >
            Next-Gen Robotics is a 2-day workshop organized by the
            Robotics Club, GRIET in association with the AI/ML
            Department.
          </p>


          <p
            style={{
              color: '#669BBC',
              lineHeight: 1.9,
              marginBottom: '1.2rem'
            }}
          >
            The workshop focuses on robotics, technology,
            hands-on learning and innovation. Participants will
            get an opportunity to learn, experiment and work
            together while exploring the possibilities of
            next-generation robotics.
          </p>


          <p
            style={{
              color: '#669BBC',
              lineHeight: 1.9,
              margin: 0
            }}
          >
            Gather your squad, bring your ideas and get ready to
            experience an exciting journey into robotics.
          </p>

        </div>


        {/* =========================
            EVENT SCHEDULE
        ========================== */}

        <div
          style={{
            border: '1px solid rgba(102,155,188,0.35)',
            borderRadius: '20px',
            padding: '2.5rem',
            backgroundColor: 'rgba(0,48,73,0.7)',
            marginBottom: '2rem'
          }}
        >

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              marginBottom: '1.5rem'
            }}
          >
            <Clock
              size={24}
              color="#C1121F"
            />

            <h2
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '1.5rem',
                margin: 0
              }}
            >
              Event Timing
            </h2>
          </div>


          <div
            style={{
              display: 'grid',
              gap: '1rem'
            }}
          >

            <ScheduleItem
              day="DAY 01"
              date="18th September 2026"
              time="9:00 AM – 3:30 PM"
            />

            <ScheduleItem
              day="DAY 02"
              date="19th September 2026"
              time="9:00 AM – 3:30 PM"
            />

          </div>

        </div>


        {/* =========================
            REGISTRATION
        ========================== */}

        <div
          style={{
            border: '1px solid rgba(102,155,188,0.35)',
            borderRadius: '20px',
            padding: '2.5rem',
            backgroundColor: 'rgba(0,48,73,0.7)',
            marginBottom: '2rem'
          }}
        >

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              marginBottom: '1.5rem'
            }}
          >
            <ClipboardList
              size={24}
              color="#C1121F"
            />

            <h2
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '1.5rem',
                margin: 0
              }}
            >
              Registration Details
            </h2>
          </div>


          <div
            style={{
              display: 'grid',
              gap: '0.8rem',
              color: '#669BBC',
              lineHeight: 1.8
            }}
          >

            <p style={{ margin: 0 }}>
              <strong style={{ color: '#FDF0D5' }}>
                Team Size:
              </strong>{' '}
              4 – 6 members
            </p>

            <p style={{ margin: 0 }}>
              <strong style={{ color: '#FDF0D5' }}>
                Registration Fee:
              </strong>{' '}
              ₹1200 per team
            </p>

            <p style={{ margin: 0 }}>
              <strong style={{ color: '#FDF0D5' }}>
                Certificates:
              </strong>{' '}
              Certificates will be provided to all participants.
            </p>

          </div>


          {/* REGISTER BUTTON */}
          <a
            href="https://forms.gle/oZ1LaBSqneapcQAf6"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '2rem',
              padding: '1rem 1.5rem',
              backgroundColor: '#C1121F',
              color: '#FDF0D5',
              textDecoration: 'none',
              borderRadius: '8px',
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: '0.75rem'
            }}
          >
            Register Now
          </a>

        </div>


        {/* =========================
            LOCATION
        ========================== */}

        <div
          style={{
            border: '1px solid rgba(102,155,188,0.35)',
            borderRadius: '20px',
            padding: '2.5rem',
            backgroundColor: 'rgba(0,48,73,0.7)',
            marginBottom: '2rem'
          }}
        >

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem',
              marginBottom: '1rem'
            }}
          >
            <MapPin
              size={24}
              color="#C1121F"
            />

            <h2
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '1.5rem',
                margin: 0
              }}
            >
              Location
            </h2>
          </div>


          <p
            style={{
              color: '#669BBC',
              lineHeight: 1.8,
              margin: 0
            }}
          >
            Hall 1, Gokaraju Rangaraju Institute of Engineering
            and Technology (GRIET) Campus.
          </p>

        </div>


        {/* =========================
            CONTACT
        ========================== */}

        <div
          style={{
            border: '1px solid rgba(102,155,188,0.35)',
            borderRadius: '20px',
            padding: '2.5rem',
            backgroundColor: 'rgba(0,48,73,0.7)'
          }}
        >

          <h2
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            For Queries
          </h2>


          <div
            style={{
              display: 'grid',
              gap: '1rem'
            }}
          >

            <ContactPerson
              name="Pranav"
              phone="+91 79899 07555"
            />

            <ContactPerson
              name="Chanakya"
              phone="+91 77801 29208"
            />

          </div>


          <div
            style={{
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(102,155,188,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.7rem'
            }}
          >

            <Mail
              size={19}
              color="#C1121F"
            />

            <a
              href="mailto:grietrobotics@gmail.com"
              style={{
                color: '#669BBC',
                textDecoration: 'none',
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '0.75rem'
              }}
            >
              grietrobotics@gmail.com
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}


/* =========================
   INFO CARD
========================= */

function InfoCard({ icon, title, value }) {
  return (
    <div
      style={{
        border: '1px solid rgba(102,155,188,0.3)',
        borderRadius: '14px',
        padding: '1.4rem',
        backgroundColor: 'rgba(0,48,73,0.65)'
      }}
    >

      <div
        style={{
          color: '#C1121F',
          marginBottom: '0.8rem'
        }}
      >
        {icon}
      </div>

      <p
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: '0.62rem',
          color: '#669BBC',
          marginBottom: '0.5rem',
          letterSpacing: '0.5px'
        }}
      >
        {title}
      </p>

      <p
        style={{
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: '0.78rem',
          lineHeight: 1.6,
          margin: 0,
          color: '#FDF0D5'
        }}
      >
        {value}
      </p>

    </div>
  );
}


/* =========================
   SCHEDULE ITEM
========================= */

function ScheduleItem({ day, date, time }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
        padding: '1.2rem',
        borderRadius: '12px',
        backgroundColor: 'rgba(102,155,188,0.08)',
        border: '1px solid rgba(102,155,188,0.15)'
      }}
    >

      <div>

        <p
          style={{
            fontFamily: "'Zen Dots', sans-serif",
            color: '#C1121F',
            fontSize: '0.65rem',
            marginBottom: '0.4rem'
          }}
        >
          {day}
        </p>

        <p
          style={{
            margin: 0,
            color: '#FDF0D5',
            fontFamily: "'Zen Dots', sans-serif",
            fontSize: '0.8rem'
          }}
        >
          {date}
        </p>

      </div>


      <p
        style={{
          margin: 0,
          color: '#669BBC',
          fontFamily: "'Zen Dots', sans-serif",
          fontSize: '0.75rem'
        }}
      >
        {time}
      </p>

    </div>
  );
}


/* =========================
   CONTACT PERSON
========================= */

function ContactPerson({ name, phone }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}
    >

      <Phone
        size={19}
        color="#C1121F"
      />

      <div>

        <p
          style={{
            margin: 0,
            color: '#FDF0D5',
            fontFamily: "'Zen Dots', sans-serif",
            fontSize: '0.8rem'
          }}
        >
          {name}
        </p>

        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          style={{
            color: '#669BBC',
            textDecoration: 'none',
            fontSize: '0.8rem'
          }}
        >
          {phone}
        </a>

      </div>

    </div>
  );
}