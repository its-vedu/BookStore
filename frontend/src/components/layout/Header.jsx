import React from 'react';

const headerStyle = {
  backgroundColor: '#1e40af', // Deep blue
  color: 'white',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  borderBottom: '3px solid #3b82f6', // Accent border
};

const titleStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  margin: 0,
  fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  letterSpacing: '1px',
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>📚 My Book Store</h1>
    </header>
  );
};

export default Header;
