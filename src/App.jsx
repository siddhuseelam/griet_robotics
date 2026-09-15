import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import Hero from './components/Hero';
import EventGallery from './components/EventGallery';
import InventoryList from './components/InventoryList';
import TeamSection from './components/TeamSection';
import EventDetails from './components/EventDetails';
import Members from './components/Members';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* =========================
            NAVIGATION BAR
        ========================== */}
        <header
          style={{
            padding: '0.9rem 0',
            borderBottom: '1px solid rgba(102, 155, 188, 0.25)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(0, 48, 73, 0.96)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            zIndex: 1000
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem'
            }}
          >

            {/* =========================
                LOGO + CLUB NAME
            ========================== */}
            <NavLink
              to="/"
              style={{
                color: '#FDF0D5',
                textDecoration: 'none'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  fontFamily: "'Zen Dots', sans-serif"
                }}
              >
                <img
                  src="/griet-robotics-logo.jpeg"
                  alt="GRIET Robotics Club Logo"
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'contain',
                    borderRadius: '50%',
                    backgroundColor: '#FDF0D5'
                  }}
                />

                <span>
                  GRIET Robotics Club
                </span>
              </div>
            </NavLink>


            {/* =========================
                NAVIGATION LINKS
            ========================== */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.4rem',
                fontFamily: "'Zen Dots', sans-serif",
                fontSize: '0.75rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}
            >

              <NavLink
                to="/"
                style={navStyle}
              >
                Home
              </NavLink>

              <NavLink
                to="/events"
                style={navStyle}
              >
                Events
              </NavLink>

              <NavLink
                to="/about"
                style={navStyle}
              >
                About
              </NavLink>

              <NavLink
                to="/team"
                style={navStyle}
              >
                Team
              </NavLink>

              

              <NavLink
                to="/contact"
                style={navStyle}
              >
                Contact
              </NavLink>

            </nav>

          </div>
        </header>


        {/* =========================
            PAGES
        ========================== */}
        <main>

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Hero />}
            />

            {/* EVENTS */}
            <Route
              path="/events"
              element={<EventGallery />}
            />

            {/* NEXT-GEN ROBOTICS EVENT DETAILS */}
            <Route
              path="/events/next-gen-robotics"
              element={<EventDetails />}
            />

            {/* ABOUT */}
            <Route
              path="/about"
              element={<InventoryList />}
            />

            {/* TEAM */}
            <Route
              path="/team"
              element={<Members />}
            />

            

            {/* CONTACT */}
            <Route
              path="/contact"
              element={<TeamSection />}
            />

          </Routes>

        </main>


        {/* =========================
            FOOTER
        ========================== */}
        <footer
          style={{
            borderTop: '1px solid rgba(102, 155, 188, 0.25)',
            padding: '3rem 0',
            marginTop: '4rem',
            textAlign: 'center',
            color: '#669BBC',
            backgroundColor: '#003049'
          }}
        >
          <div className="container">

            <h3
              style={{
                marginBottom: '0.5rem',
                color: '#FDF0D5',
                fontFamily: "'Zen Dots', sans-serif"
              }}
            >
              ROBOTICS CLUB, GRIET
            </h3>

            <p
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                color: '#C1121F'
              }}
            >
              Imagine · Engineer · Innovate
            </p>

            <p
              style={{
                fontFamily: "'Zen Dots', sans-serif",
                marginTop: '1rem',
                fontSize: '0.7rem',
                color: '#669BBC'
              }}
            >
              © {new Date().getFullYear()} Robotics Club, GRIET.
              All rights reserved.
            </p>

          </div>
        </footer>

      </div>
    </BrowserRouter>
  );
}


/* =========================
   NAVIGATION LINK STYLE
========================== */

const navStyle = ({ isActive }) => ({
  color: isActive
    ? '#C1121F'
    : '#FDF0D5',

  textDecoration: 'none',

  transition: 'all 0.25s ease',

  fontFamily: "'Zen Dots', sans-serif",

  fontWeight: 500,

  borderBottom: isActive
    ? '2px solid #C1121F'
    : '2px solid transparent',

  paddingBottom: '5px'
});


export default App;