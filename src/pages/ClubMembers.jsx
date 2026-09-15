import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Users, UserRound } from 'lucide-react';

/*
=========================================================
CLUB MEMBERS

IMPORTANT:
The following 9 members are already displayed in the
Club Leads section on the Home page, so they are NOT
included here:

1. Pranav Satya
2. CHUNCHU SRICHANAKYA
3. Siddhartha Reddy Seelam
4. Vedanaparthi Tanusri
5. Burugu Vaishnavi
6. Akshitha Dyavanapelly
7. Vaishnavi Gondala
8. Manogna Nallavelli
9. srichaitanya

Also, duplicate Joshitha entry has been removed.
=========================================================
*/


/*
=========================================================
MEMBER DATA
=========================================================
*/

const members = [
  // =========================
  // CR & PR
  // =========================

  {
    name: 'Salla Akhillessh',
    domain: 'CR & PR'
  },

  {
    name: 'N Rahul Nandan Reddy',
    domain: 'CR & PR'
  },

  {
    name: 'Gullapelli Srinanditha',
    domain: 'CR & PR'
  },

  {
    name: 'Devender Reddy',
    domain: 'CR & PR'
  },


  // =========================
  // CREATIVE & DESIGNING
  // =========================

  {
    name: 'Kunuku Bharani Satya',
    domain: 'Creative & Designing'
  },

  {
    name: 'Sanatana Kavyamrutha',
    domain: 'Creative & Designing'
  },

  {
    name: 'Koduri Sathwik',
    domain: 'Creative & Designing'
  },

  {
    name: 'Ravithreni Vasam',
    domain: 'Creative & Designing'
  },

  {
    name: 'Ajasra Gayam',
    domain: 'Creative & Designing'
  },


  // =========================
  // DATABASE
  // =========================

  {
    name: 'GNANASRI THUNUGUNTA',
    domain: 'Database'
  },

  {
    name: 'Guntuka Jahnavi',
    domain: 'Database'
  },

  {
    name: 'Rida Mohammad',
    domain: 'Database'
  },

  {
    name: 'Karra Sri Chandana',
    domain: 'Database'
  },


  // =========================
  // DOCUMENTATION
  // =========================

  {
    name: 'Joshit Ampolu',
    domain: 'Documentation'
  },

  {
    name: 'Elluri Yeshwanth',
    domain: 'Documentation'
  },

  {
    name: 'Rakshika Reddy',
    domain: 'Documentation'
  },


  // =========================
  // EVENT MANAGEMENT
  // =========================

  {
    name: 'GADDAM NITHIN SAI',
    domain: 'Event Management'
  },

  {
    name: 'B. Abhiram',
    domain: 'Event Management'
  },

  {
    name: 'Jeshwanth Jagini',
    domain: 'Event Management'
  },

  {
    name: 'Maloth Varshini',
    domain: 'Event Management'
  },

  {
    name: 'K J JAYWANTH',
    domain: 'Event Management'
  },

  {
    name: 'Nipun',
    domain: 'Event Management'
  },


  // =========================
  // PUBLICITY
  // =========================

  {
    name: 'Ponugoti Thirumala Rao',
    domain: 'Publicity'
  },

  {
    name: 'Joshitha',
    domain: 'Publicity'
  },


  // =========================
  // TECHNICAL
  // =========================

  {
    name: 'Santhosh',
    domain: 'Technical'
  },

  {
    name: 'Aaryan Arjun P',
    domain: 'Technical'
  },

  {
    name: 'Ambati Bavana Sree',
    domain: 'Technical'
  },

  {
    name: 'Alakuntla Ramyasree',
    domain: 'Technical'
  },

  {
    name: 'Pruthvi Girijala',
    domain: 'Technical'
  },

  {
    name: 'Adulapuram Venkata Sai Likhith',
    domain: 'Technical'
  },


  // =========================
  // TREASURY
  // =========================

  {
    name: 'G Sai Varun',
    domain: 'Treasury'
  },

  {
    name: 'BATTU YASHWANTH JAI',
    domain: 'Treasury'
  }
];

/*
=========================================================
DOMAIN ICONS / ACCENTS
=========================================================
*/

const domainIcons = {
  'CR & PR': '01',
  'Creative & Designing': '02',
  'Database': '03',
  'Design': '04',
  'Documentation': '05',
  'Event Management': '06',
  'PR': '07',
  'Publicity': '08',
  'Tech': '09',
  'Technical': '10',
  'Treasury': '11'
};


/*
=========================================================
MAIN COMPONENT
=========================================================
*/

export default function ClubMembers() {

  /*
  selectedDomain:
  null = show all domains

  selectedDomain:
  domain name = show members in that domain
  */

  const [selectedDomain, setSelectedDomain] = useState(null);


  /*
  Create domain list automatically from member data.
  */

  const domains = useMemo(() => {

    const grouped = {};

    members.forEach((member) => {

      if (!grouped[member.domain]) {
        grouped[member.domain] = [];
      }

      grouped[member.domain].push(member);

    });

    return grouped;

  }, []);


  /*
  If a domain is selected,
  get only those members.
  */

  const selectedMembers = selectedDomain
    ? domains[selectedDomain] || []
    : [];


  /*
  =======================================================
  DOMAIN PAGE
  =======================================================
  */

  if (!selectedDomain) {

    return (
      <section
        style={{
          minHeight: '100vh',
          backgroundColor: 'var(--deep-space-blue)',
          color: 'var(--papaya-whip)',
          padding: '5rem 0'
        }}
      >

        <div
          className="container"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem'
          }}
        >

          {/* HEADER */}

          <div
            style={{
              textAlign: 'center',
              marginBottom: '4rem'
            }}
          >

            <div
              style={{
                width: '70px',
                height: '70px',
                margin: '0 auto 1.5rem',
                borderRadius: '50%',
                backgroundColor: 'var(--papaya-whip)',
                color: 'var(--deep-space-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Users size={32} />
            </div>


            <p
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '0.7rem',
                letterSpacing: '2px',
                color: 'var(--brick-red)',
                marginBottom: '1rem'
              }}
            >
              ROBOTICS CLUB · GRIET
            </p>


            <h1
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: 'clamp(2rem, 6vw, 4rem)',
                margin: 0,
                color: 'var(--papaya-whip)'
              }}
            >
              CLUB MEMBERS
            </h1>


            <p
              style={{
                maxWidth: '650px',
                margin: '1.2rem auto 0',
                color: 'var(--steel-blue)',
                lineHeight: 1.8,
                fontSize: '0.9rem'
              }}
            >
              Explore the different teams and domains
              that make the Robotics Club of GRIET
              stronger through teamwork and innovation.
            </p>

          </div>


          {/* DOMAIN CARDS */}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem'
            }}
          >

            {Object.entries(domains).map(
              ([domain, domainMembers]) => (

                <button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  style={{
                    position: 'relative',
                    textAlign: 'left',
                    padding: '2rem',
                    minHeight: '220px',
                    borderRadius: '18px',
                    border:
                      '1px solid rgba(var(--steel-blue-rgb), 0.35)',
                    backgroundColor:
                      'rgba(var(--papaya-whip-rgb), 0.06)',
                    color: 'var(--papaya-whip)',
                    cursor: 'pointer',
                    fontFamily: "'Zen Dots', sans-serif",
                    transition:
                      'transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease'
                  }}

                  onMouseEnter={(e) => {

                    e.currentTarget.style.transform =
                      'translateY(-7px)';

                    e.currentTarget.style.borderColor =
                      'var(--brick-red)';

                    e.currentTarget.style.backgroundColor =
                      'rgba(var(--brick-red-rgb), 0.08)';

                  }}

                  onMouseLeave={(e) => {

                    e.currentTarget.style.transform =
                      'translateY(0)';

                    e.currentTarget.style.borderColor =
                      'rgba(var(--steel-blue-rgb), 0.35)';

                    e.currentTarget.style.backgroundColor =
                      'rgba(var(--papaya-whip-rgb), 0.06)';

                  }}
                >

                  {/* NUMBER */}

                  <div
                    style={{
                      color: 'var(--brick-red)',
                      fontSize: '0.65rem',
                      letterSpacing: '2px',
                      marginBottom: '2rem'
                    }}
                  >
                    DOMAIN {domainIcons[domain] || ''}
                  </div>


                  {/* DOMAIN NAME */}

                  <h2
                    style={{
                      margin: 0,
                      fontSize: '1.15rem',
                      lineHeight: 1.5,
                      color: 'var(--papaya-whip)'
                    }}
                  >
                    {domain}
                  </h2>


                  {/* MEMBER COUNT */}

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      marginTop: '1.2rem',
                      color: 'var(--steel-blue)',
                      fontSize: '0.7rem'
                    }}
                  >

                    <Users size={15} />

                    {domainMembers.length}{' '}
                    {domainMembers.length === 1
                      ? 'Member'
                      : 'Members'}

                  </div>


                  {/* VIEW */}

                  <div
                    style={{
                      position: 'absolute',
                      right: '1.7rem',
                      bottom: '1.7rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--brick-red)',
                      fontSize: '0.65rem'
                    }}
                  >
                    VIEW
                    <ArrowRight size={15} />
                  </div>

                </button>

              )
            )}

          </div>


          {/* TOTAL */}

          <div
            style={{
              textAlign: 'center',
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop:
                '1px solid rgba(var(--steel-blue-rgb), 0.2)'
            }}
          >

            <p
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                color: 'var(--steel-blue)',
                fontSize: '0.7rem'
              }}
            >
              {members.length} CLUB MEMBERS ·{' '}
              {Object.keys(domains).length} DOMAINS
            </p>

          </div>

        </div>

      </section>
    );
  }


  /*
  =======================================================
  SELECTED DOMAIN PAGE
  =======================================================
  */

  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--deep-space-blue)',
        color: 'var(--papaya-whip)',
        padding: '5rem 0'
      }}
    >

      <div
        className="container"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}
      >

        {/* BACK BUTTON */}

        <button
          onClick={() => setSelectedDomain(null)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            border: '1px solid rgba(var(--steel-blue-rgb), 0.4)',
            backgroundColor: 'transparent',
            color: 'var(--papaya-whip)',
            padding: '0.75rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontFamily: "'Zen Dots', sans-serif",
            fontSize: '0.65rem',
            marginBottom: '3rem'
          }}
        >

          <ArrowLeft size={15} />

          BACK TO DOMAINS

        </button>


        {/* DOMAIN HEADER */}

        <div
          style={{
            marginBottom: '3.5rem'
          }}
        >

          <p
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              color: 'var(--brick-red)',
              fontSize: '0.7rem',
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}
          >
            ROBOTICS CLUB · TEAM
          </p>


          <h1
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--papaya-whip)',
              margin: 0
            }}
          >
            {selectedDomain}
          </h1>


          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginTop: '1rem',
              color: 'var(--steel-blue)',
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: '0.7rem'
            }}
          >

            <Users size={16} />

            {selectedMembers.length}{' '}
            {selectedMembers.length === 1
              ? 'MEMBER'
              : 'MEMBERS'}

          </div>

        </div>


        {/* MEMBER CARDS */}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}
        >

          {selectedMembers.map((member, index) => (

            <div
              key={`${member.name}-${index}`}
              style={{
                backgroundColor:
                  'rgba(var(--papaya-whip-rgb), 0.06)',
                border:
                  '1px solid rgba(var(--steel-blue-rgb), 0.3)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition:
                  'transform 0.3s ease, border-color 0.3s ease'
              }}

              onMouseEnter={(e) => {

                e.currentTarget.style.transform =
                  'translateY(-6px)';

                e.currentTarget.style.borderColor =
                  'var(--brick-red)';

              }}

              onMouseLeave={(e) => {

                e.currentTarget.style.transform =
                  'translateY(0)';

                e.currentTarget.style.borderColor =
                  'rgba(var(--steel-blue-rgb), 0.3)';

              }}
            >

              {/* BLANK IMAGE AREA */}

              <div
                style={{
                  height: '250px',
                  backgroundColor: 'var(--papaya-whip)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >

                <div
                  style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    border:
                      '2px solid rgba(var(--deep-space-blue-rgb), 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--steel-blue)'
                  }}
                >

                  <UserRound size={42} />

                </div>

              </div>


              {/* MEMBER INFORMATION */}

              <div
                style={{
                  padding: '1.5rem'
                }}
              >

                {/* NUMBER */}

                <div
                  style={{
                    fontFamily: "'Zen Dots', sans-serif",
                    fontSize: '0.6rem',
                    color: 'var(--brick-red)',
                    letterSpacing: '1px',
                    marginBottom: '0.7rem'
                  }}
                >
                  MEMBER {String(index + 1).padStart(2, '0')}
                </div>


                {/* NAME */}

                <h3
                  style={{
                    fontFamily: "'Zen Dots', sans-serif",
                    color: 'var(--papaya-whip)',
                    fontSize: '0.95rem',
                    lineHeight: 1.5,
                    margin: 0
                  }}
                >
                  {member.name}
                </h3>


                {/* DOMAIN */}

                <p
                  style={{
                    fontFamily: "'Zen Dots', sans-serif",
                    color: 'var(--steel-blue)',
                    fontSize: '0.65rem',
                    margin:
                      '0.7rem 0 0',
                    lineHeight: 1.5
                  }}
                >
                  {member.domain}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* BOTTOM BACK BUTTON */}

        <div
          style={{
            textAlign: 'center',
            marginTop: '4rem'
          }}
        >

          <button
            onClick={() => setSelectedDomain(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.9rem 1.3rem',
              border: '1px solid var(--brick-red)',
              backgroundColor: 'transparent',
              color: 'var(--papaya-whip)',
              borderRadius: '8px',
              cursor: 'pointer',
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: '0.65rem'
            }}
          >

            <ArrowLeft size={15} />

            BACK TO ALL DOMAINS

          </button>

        </div>

      </div>

    </section>
  );
}