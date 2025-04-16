import React from 'react';

const Spinner = () => {
  return (
    <div
      style={{
        width: '64px', // Increased the size
        height: '64px',
        margin: '32px auto',
        borderRadius: '50%',
        backgroundColor: '#0284c7', // Sky Blue color
        animation: 'spin 1.5s ease-in-out infinite, pulse 1.5s infinite',
      }}
    />
  );
};

export default Spinner;
