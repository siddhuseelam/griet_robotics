import React from 'react';
import {
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function TeamSection() {
  return (
    <section className="section" id="contact">

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
          Contact Us
        </h1>

        <p
          className="text-secondary"
          style={{
            maxWidth: '650px',
            lineHeight: 1.7,
            marginBottom: '3rem'
          }}
        >
          Have a question, collaboration idea, or want to know more
          about the Robotics Club? Get in touch with us.
        </p>


        <div
          className="grid grid-cols-2"
          style={{
            gap: '2rem'
          }}
        >

          {/* Contact Information */}
          <div className="card">

            <h2
              style={{
                fontSize: '1.6rem',
                marginBottom: '1.8rem'
              }}
            >
              Get in Touch
            </h2>


            {/* Pranav */}
            <ContactItem
              icon={<Phone size={22} />}
              title="Pranav"
              value="+91 79899 07555"
              href="tel:+917989907555"
            />


            {/* Chanakya */}
            <ContactItem
              icon={<Phone size={22} />}
              title="Chanakya"
              value="+91 7780129208"
              href="tel:+917780129208"
            />


            {/* Email */}
            <ContactItem
              icon={<Mail size={22} />}
              title="Email"
              value="grietrobotics@gmail.com"
              href="mailto:grietrobotics@gmail.com"
            />


            {/* Location */}
            <ContactItem
              icon={<MapPin size={22} />}
              title="Location"
              value="GRIET Campus, Hyderabad"
            />

          </div>


          {/* Club Information */}
          <div className="card">

            <p
              className="text-accent font-mono"
              style={{
                fontSize: '0.8rem',
                marginBottom: '0.8rem'
              }}
            >
              GRIET
            </p>

            <h2
              style={{
                fontSize: '1.8rem',
                marginBottom: '1rem'
              }}
            >
              Robotics Club
            </h2>

            <p
              className="text-secondary"
              style={{
                lineHeight: 1.8,
                marginBottom: '1.5rem'
              }}
            >
              A student-driven community focused on robotics,
              artificial intelligence, electronics, automation
              and innovation.
            </p>

            <p
              style={{
                lineHeight: 1.8,
                marginBottom: '1.5rem'
              }}
            >
              Imagine · Engineer · Innovate
            </p>

            <p
              className="text-secondary font-mono"
              style={{
                fontSize: '0.8rem'
              }}
            >
              Robotics Club, Gokaraju Rangaraju Institute of
              Engineering and Technology
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}


/* Contact Item */

function ContactItem({
  icon,
  title,
  value,
  href
}) {

  const content = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '1.7rem'
      }}
    >

      <div
        style={{
          color: 'var(--primary)',
          display: 'flex'
        }}
      >
        {icon}
      </div>

      <div>

        <div
          className="font-mono text-secondary"
          style={{
            fontSize: '0.75rem',
            marginBottom: '0.25rem'
          }}
        >
          {title}
        </div>

        <div>
          {value}
        </div>

      </div>

    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        style={{
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        {content}
      </a>
    );
  }

  return content;
}