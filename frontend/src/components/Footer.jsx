import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <div className="footer-wrapper">
    <footer className="footer">
      <p>© {new Date().getFullYear()} Devid Deshmukh</p>
      <div className="links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  </div>
);

export default Footer;