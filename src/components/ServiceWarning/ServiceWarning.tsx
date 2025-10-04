"use client"
import React, { useState, useEffect } from 'react';

const ServiceWarning = ({ amount = 416.84 }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Hardcoded start time: 4 Oct 2025, 3:36 PM
    const startTime = new Date('2025-10-04T15:36:00').getTime();
    const deadline = startTime + 24 * 60 * 60 * 1000; // 24 hours later

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.floor((deadline - now) / 1000); // seconds remaining
      if (diff <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert seconds to hh:mm:ss
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '10px',
        width: '400px',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      }}>
        <h2 style={{ color: 'red', marginBottom: '10px' }}>⚠️ Service Warning</h2>
        <p>Your service will be discontinued if the payment of <strong>${amount}</strong> is not made within 24 hours.</p>
        {timeLeft > 0 ? (
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Time left: {formatTime(timeLeft)}</p>
        ) : (
          <p style={{ color: 'red', fontWeight: 'bold' }}>Your service has been discontinued!</p>
        )}


        <div style={{ marginTop: '15px' }}>
          <button 

            onClick={() => 
                //@ts-ignore
                window.location = "mailto:sagarsharmatech00@gmail.com"} 
            style={{
              padding: '8px 15px',
              backgroundColor: '#555',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            Contact Developer
          </button>
          <button 
            onClick={() => setIsOpen(false)} 
            style={{
              padding: '8px 15px',
              background: 'none',
              border: '1px solid #555',
              borderRadius: '5px',
              color: '#555',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceWarning;
