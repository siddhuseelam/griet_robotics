import React, { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: '/gallery1.jpg',
      title: 'Learning & Innovation',
      description:
        'Students participating in an engaging technical session at GRIET.'
    },
    {
      id: 2,
      src: '/gallery2.jpg',
      title: 'Technical Sessions',
      description:
        'An interactive technical session bringing students together to learn and explore.'
    },
    {
      id: 3,
      src: '/gallery3.jpg',
      title: 'Community & Collaboration',
      description:
        'Students collaborating and sharing ideas in the spirit of innovation.'
    }
  ];

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '5rem 0',
        background: 'var(--deep-space-blue)',
        color: 'var(--papaya-whip)'
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

        {/* Page Heading */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem'
          }}
        >
          <p
            style={{
              color: 'var(--steel-blue)',
              fontFamily: 'var(--font-family)',
              fontSize: '0.9rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.8rem'
            }}
          >
            ROBOTICS CLUB • GRIET
          </p>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              margin: 0,
              color: 'var(--papaya-whip)',
              fontWeight: 700
            }}
          >
            Our Gallery
          </h1>

          <p
            style={{
              maxWidth: '650px',
              margin: '1.2rem auto 0',
              color: 'var(--steel-blue)',
              fontSize: '1.05rem',
              lineHeight: 1.7
            }}
          >
            A glimpse into the learning, collaboration and innovation
            happening at the Robotics Club of GRIET.
          </p>
        </div>


        {/* Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}
        >

          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              style={{
                background: 'rgba(102, 155, 188, 0.10)',
                border: '1px solid rgba(102, 155, 188, 0.35)',
                borderRadius: '18px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow =
                  '0 18px 40px rgba(0, 0, 0, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >

              {/* Image */}
              <div
                style={{
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  background: 'var(--deep-space-blue)'
                }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>


              {/* Card Content */}
              <div
                style={{
                  padding: '1.4rem'
                }}
              >

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}
                >

                  <h2
                    style={{
                      margin: 0,
                      color: 'var(--papaya-whip)',
                      fontSize: '1.25rem'
                    }}
                  >
                    {image.title}
                  </h2>

                  <span
                    style={{
                      minWidth: '38px',
                      height: '38px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      background: 'var(--brick-red)',
                      color: 'white',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}
                  >
                    0{image.id}
                  </span>

                </div>

                <p
                  style={{
                    color: 'var(--steel-blue)',
                    lineHeight: 1.6,
                    marginTop: '0.8rem',
                    marginBottom: 0
                  }}
                >
                  {image.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>


      {/* Full Image Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.88)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            zIndex: 1000
          }}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1000px',
              width: '100%',
              position: 'relative'
            }}
          >

            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-45px',
                right: 0,
                border: 'none',
                background: 'var(--brick-red)',
                color: 'white',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '1.2rem'
              }}
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              style={{
                width: '100%',
                maxHeight: '80vh',
                objectFit: 'contain',
                borderRadius: '12px',
                display: 'block'
              }}
            />

            <div
              style={{
                textAlign: 'center',
                marginTop: '1rem'
              }}
            >
              <h2
                style={{
                  color: 'var(--papaya-whip)',
                  marginBottom: '0.4rem'
                }}
              >
                {selectedImage.title}
              </h2>

              <p
                style={{
                  color: 'var(--steel-blue)',
                  margin: 0
                }}
              >
                {selectedImage.description}
              </p>
            </div>

          </div>

        </div>
      )}

    </section>
  );
}