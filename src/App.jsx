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

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        {/* Navigation */}
        <header
          style={{
            padding: '1rem 0',
            borderBottom: '1px solid var(--surface-border)',
            position: 'sticky',
            top: 0,
            backgroundColor: 'rgba(13, 17, 23, 0.95)',
            backdropFilter: 'blur(12px)',
            zIndex: 100
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

            {/* Logo / Club name */}
            <NavLink
              to="/"
              style={{
                color: 'inherit',
                textDecoration: 'none'
              }}
            >

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.7rem',
                  fontWeight: 700,
                  fontSize: '1.1rem'
                }}
              >

                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, #00ffcc, #008cff)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem'
                  }}
                >
                  🤖
                </div>

                <span>
                  GRIET Robotics Club
                </span>

              </div>

            </NavLink>


            {/* Navigation */}
            <nav
              style={{
                display: 'flex',
                gap: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem'
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
                to="/contact"
                style={navStyle}
              >
                Contact
              </NavLink>

            </nav>

          </div>

        </header>


        {/* Pages */}
        <main>

          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<Hero />}
            />

            {/* Events */}
            <Route
              path="/events"
              element={<EventGallery />}
            />

            {/* Individual event */}
            <Route
              path="/events/next-gen-robotics"
              element={<EventDetails />}
            />

            {/* About */}
            <Route
              path="/about"
              element={<InventoryList />}
            />

            {/* Contact */}
            <Route
              path="/contact"
              element={<TeamSection />}
            />

          </Routes>

        </main>


        {/* Footer */}
        <footer
          style={{
            borderTop: '1px solid var(--surface-border)',
            padding: '3rem 0',
            marginTop: '4rem',
            textAlign: 'center',
            color: 'var(--text-secondary)'
          }}
        >

          <div className="container">

            <h3
              style={{
                marginBottom: '0.5rem'
              }}
            >
              ROBOTICS CLUB, GRIET
            </h3>

            <p className="font-mono">
              Imagine · Engineer · Innovate
            </p>

            <p
              className="font-mono"
              style={{
                marginTop: '1rem',
                fontSize: '0.8rem'
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


const navStyle = ({ isActive }) => ({
  color: isActive
    ? 'var(--primary)'
    : 'var(--text-secondary)',

  textDecoration: 'none',

  transition: '0.2s ease'
});


export default App;