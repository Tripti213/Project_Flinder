import React, { useState } from 'react';
import './Footer.css';
import ContactForm from './ContactForm';

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleClose = () => {
    setShowContactForm(false);
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Flinder®</h2>
        <a href="mailto:feedback@flinder.in">feedback@flinder.in</a>
        <br></br>
        <button onClick={handleContactClick}>Contact us</button>
        <div className="social-icons">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
      <div className="footer-section">
        <h3>About</h3>
        <p>Company</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        
      </div>
      <div className="footer-section">
        <h3>Flatmates</h3>
        <p>Flatmates in Delhi</p>
        <p>Flatmates in Noida</p>
        <p>Flatmates in Gurgaon</p>
        <p>Flatmates in Bangalore</p>
        <p>Flatmates in Pune</p>
        <p>Flatmates in Hyderabad</p>
      </div>
      {showContactForm && <ContactForm onClose={handleClose} />}
    </footer>
  );
};

export default Footer; 