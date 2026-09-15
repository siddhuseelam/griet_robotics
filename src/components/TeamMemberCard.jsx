import React from 'react';
import { User } from 'lucide-react';

// Helper to format Google Drive link to direct image link
const getDirectImageUrl = (url) => {
  if (!url) return null;
  const match = url.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://drive.google.com/uc?export=view&id=${match[1]}`;
  }
  return null;
};

export default function TeamMemberCard({ member }) {
  if (!member || !member.Name) return null; // Skip invalid entries

  const imageUrl = getDirectImageUrl(member.Photo);

  return (
    <div
      style={{
        minWidth: '245px',
        width: '245px',
        flexShrink: 0,
        background: 'linear-gradient(145deg, rgba(var(--deep-space-blue-rgb), 0.95), rgba(var(--deep-space-blue-rgb), 0.95))',
        border: '1px solid rgba(var(--steel-blue-rgb), 0.35)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.20)',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(var(--steel-blue-rgb), 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.20)';
      }}
    >
      {/* Image Area */}
      <div
        style={{
          height: '220px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--deep-space-blue), var(--steel-blue))',
          color: 'var(--papaya-whip)',
          position: 'relative'
        }}
      >
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={member.Name} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              // Fallback to avatar if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        
        {/* Fallback Avatar */}
        <div
          style={{
            display: imageUrl ? 'none' : 'flex',
            width: '85px',
            height: '85px',
            borderRadius: '50%',
            border: '2px solid rgba(var(--papaya-whip-rgb), 0.5)',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <User size={42} />
        </div>
      </div>

      {/* Details */}
      <div style={{ padding: '1.2rem' }}>
        <h3
          style={{
            margin: 0,
            marginBottom: '0.7rem',
            fontSize: '0.9rem',
            lineHeight: 1.5,
            color: 'var(--papaya-whip)',
            fontFamily: "'Zen Dots', sans-serif",
            textTransform: 'capitalize'
          }}
        >
          {member.Name.toLowerCase()}
        </h3>

        <div
          style={{
            display: 'inline-block',
            padding: '0.45rem 0.7rem',
            borderRadius: '20px',
            backgroundColor: 'rgba(var(--steel-blue-rgb), 0.15)',
            border: '1px solid rgba(var(--steel-blue-rgb), 0.3)',
            color: 'var(--steel-blue)',
            fontSize: '0.65rem',
            lineHeight: 1.4,
            fontFamily: "'Zen Dots', sans-serif",
            letterSpacing: '1px'
          }}
        >
          {member.Domain}
        </div>
      </div>
    </div>
  );
}
