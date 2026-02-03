import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Devid Deshmukh</p>
    <div className="links">
      <a href="https://github.com">GitHub</a>
      <a href="https://linkedin.com">LinkedIn</a>

    </div>
  </footer>
);

export default Footer;