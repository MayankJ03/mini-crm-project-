import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer footer-blink">
      <div className="footer-content">
        <p>©2024 Mayank Jain. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/mayank-p-jain/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin footer-blink"></i></a>
          <a href="https://github.com/MayankJ03" target="_blank" rel="noopener noreferrer"><i className="fab fa-github footer-blink"></i></a>
          <a href="https://drive.google.com/file/d/1Pro4O_LyQ4x-XzCBgtmpv78txpcFOFOo/view?usp=sharing" className="resume-link footer-blink" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
