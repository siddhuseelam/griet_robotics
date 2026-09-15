import React from 'react';

export default function Gallery() {
  const images = [
    {
      src: '/gallery/gallery1.jpg.jpeg',
      title: 'Learning & Innovation',
      description:
        'Students participating in an engaging technical session at GRIET.'
    },
    {
      src: '/gallery/gallery2.jpg.jpeg',
      title: 'Technical Sessions',
      description:
        'Students actively participating in technical learning and discussions.'
    },
    {
      src: '/gallery/gallery3.jpg.jpeg',
      title: 'Community & Collaboration',
      description:
        'A glimpse of students collaborating and engaging in technical activities.'
    }
  ];

  return (
    <section
      style={{
        minHeight: '85vh',
        padding: '4rem 0 6rem',
        backgroundColor: '#003049'
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

        {/* PAGE HEADER */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <p
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              color: '#C1121F',
              fontSize: '0.85rem',
              letterSpacing: '2px',
              marginBottom: '0.8rem',
              textTransform: 'uppercase'
            }}
          >
            GRIET ROBOTICS CLUB
          </p>

          <h1
            style={{
              fontFamily: "'Zen Dots', sans-serif",
              color: '#FDF0D5',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              margin: 0
            }}
          >
            Gallery
          </h1>

          <p
            style={{
              color: '#669BBC',
              fontFamily: "'Zen Dots', sans-serif",
              fontSize: '0.9rem',
              marginTop: '1rem',
              lineHeight: 1.7
            }}
          >
            A glimpse into our events, learning sessions and
            student activities.
          </p>
        </div>


        {/* GALLERY GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >

          {images.map((image, index) => (
            <div
              key={image.src}
              style={{
                backgroundColor: '#003049',
                border: '1px solid rgba(102, 155, 188, 0.35)',
                borderRadius: '18px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 18px 40px rgba(0, 0, 0, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 10px 30px rgba(0, 0, 0, 0.25)';
              }}
            >

              {/* IMAGE */}
              <div
                style={{
                  width: '100%',
                  height: '260px',
                  overflow: 'hidden',
                  backgroundColor: '#669BBC'
                }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>


              {/* CONTENT */}
              <div
                style={{
                  padding: '1.5rem',
                  position: 'relative'
                }}
              >

                {/* NUMBER */}
                <div
                  style={{
                    position: 'absolute',
                    right: '1.3rem',
                    top: '-25px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#C1121F',
                    color: '#FDF0D5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Zen Dots', sans-serif",
                    fontSize: '0.75rem',
                    border: '4px solid #003049'
                  }}
                >
                  0{index + 1}
                </div>


                <h2
                  style={{
                    color: '#FDF0D5',
                    fontFamily: "'Zen Dots', sans-serif",
                    fontSize: '1.15rem',
                    marginBottom: '0.8rem',
                    paddingRight: '2.5rem'
                  }}
                >
                  {image.title}
                </h2>

                <p
                  style={{
                    color: '#669BBC',
                    fontFamily: "'Zen Dots', sans-serif",
                    fontSize: '0.75rem',
                    lineHeight: 1.7,
                    margin: 0
                  }}
                >
                  {image.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}