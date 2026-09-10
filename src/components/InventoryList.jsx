import React, { useState } from 'react';
import { Cpu, Wrench, Battery, Box, Search } from 'lucide-react';

const defaultInventory = [
  { id: 'INV-001', name: 'Arduino Mega 2560', category: 'Microcontrollers', quantity: 15, status: 'Available' },
  { id: 'INV-002', name: 'Raspberry Pi 4 Model B (8GB)', category: 'Microcontrollers', quantity: 8, status: 'Low Stock' },
  { id: 'INV-003', name: 'NEMA 17 Stepper Motors', category: 'Motors', quantity: 42, status: 'Available' },
  { id: 'INV-004', name: 'Lidar Sensor A1M8', category: 'Sensors', quantity: 4, status: 'Available' },
  { id: 'INV-005', name: 'LiPo Battery 3S 11.1V 5000mAh', category: 'Power', quantity: 12, status: 'Available' },
  { id: 'INV-006', name: 'Soldering Iron Station', category: 'Tools', quantity: 6, status: 'Maintenance' },
];

const getCategoryIcon = (category) => {
  switch(category) {
    case 'Microcontrollers': return <Cpu size={18} />;
    case 'Motors': return <Box size={18} />;
    case 'Sensors': return <Box size={18} />;
    case 'Power': return <Battery size={18} />;
    case 'Tools': return <Wrench size={18} />;
    default: return <Box size={18} />;
  }
};

const getStatusColor = (status) => {
  switch(status) {
    case 'Available': return 'var(--primary)';
    case 'Low Stock': return '#ffaa00'; // Warning orange
    case 'Maintenance': return '#ff3366'; // Error red
    default: return 'var(--text-secondary)';
  }
};

export default function InventoryList({ inventory = defaultInventory }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="section" id="inventory">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Lab Inventory</h2>
          
          <div style={{ position: 'relative', width: '300px', maxWidth: '100%' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input 
              type="text" 
              placeholder="Search parts, tools, IDs..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--surface-border)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color var(--transition-fast)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--surface-border)'}
            />
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--surface-border)', borderRadius: 'var(--radius-md)', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--surface-border)', backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>ID</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Item Name</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Category</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Qty</th>
                <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item, index) => (
                <tr key={item.id} style={{ borderBottom: index === filteredInventory.length - 1 ? 'none' : '1px solid var(--surface-border)', transition: 'background-color var(--transition-fast)' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.id}</td>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>{item.name}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.25rem 0.75rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.85rem' }}>
                      {getCategoryIcon(item.category)} {item.category}
                    </div>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', fontFamily: 'var(--font-mono)' }}>{item.quantity}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: getStatusColor(item.status) }}></span>
                      {item.status}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredInventory.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    No items found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
