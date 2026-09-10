import React from 'react';
import Hero from './components/Hero';
import EventGallery from './components/EventGallery';
import InventoryList from './components/InventoryList';
import TeamSection from './components/TeamSection';

function App() {
  return (
    <div className="App">
      <header style={{ 
        padding: '1.5rem 0', 
        borderBottom: '1px solid var(--surface-border)',
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(13, 17, 23, 0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 700, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '24px', height: '24px', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
            University Name Robotics
          </div>
          <nav style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
            <a href="#events">Events</a>
            <a href="#inventory">Inventory</a>
            <a href="#team">Team</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <EventGallery />
        <InventoryList />
        <TeamSection />
      </main>
      
      <footer style={{
        borderTop: '1px solid var(--surface-border)',
        padding: '3rem 0',
        marginTop: '4rem',
        textAlign: 'center',
        color: 'var(--text-secondary)'
      }}>
        <div className="container">
          <p className="font-mono">© {new Date().getFullYear()} University Name Robotics Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
