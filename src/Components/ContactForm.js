import React from 'react';
import './ContactForm.css';

const ContactForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Get in touch</h2>
        <p>We'd love to hear from you.</p>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email address" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm; 