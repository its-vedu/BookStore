import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const footerStyle = {
  backgroundColor: '#1e3a8a', // deep blue
  color: 'white',
  padding: '20px 30px',
  marginTop: 'auto',
  textAlign: 'center',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginTop: '10px',
};

const iconStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  padding: '10px',
  borderRadius: '50%',
  transition: 'background-color 0.3s ease',
  color: 'white',
  textDecoration: 'none',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0 }}>&copy; 2025 <strong>Book Store</strong>. All rights reserved.</p>

      <div style={iconContainerStyle}>
        <a href="#" style={iconStyle}>
          <FaGithub />
        </a>
        <a href="#" style={iconStyle}>
          <FaLinkedin />
        </a>
        <a href="#" style={iconStyle}>
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
