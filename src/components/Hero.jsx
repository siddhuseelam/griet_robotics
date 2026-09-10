import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Abstract Background Element */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0,255,204,0.1) 0%, rgba(13,17,23,0) 70%)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <Bot size={20} />
          <span>University Name</span>
        </div>
        
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          Welcome to the <br />
          <span className="text-accent">Robotics Club</span>
        </h1>
        
        <p className="text-secondary" style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '3rem' }}>
          We design, build, and program the future. Join us in the lab to work on autonomous vehicles, battle bots, and research-grade robotics.
        </p>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary">
            Join the Club <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
          </button>
          <button className="btn btn-outline">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
