// src/components/Footer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side routing
import '../css/Footer.css'; // Import the CSS file for styling
import AboutUs from './AboutUs';
// import '../css/Main.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Perform subscription logic here (e.g., API call)
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Subscription Section */}
        <div className="footer-section">
          <h2 className="footer-title">Connect With Us</h2>
          <form className="subscription-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="subscription-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscription-button">
              Subscribe
            </button>
          </form>
          {message && <p className="subscription-message">{message}</p>}
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/faq">FAQ's</Link></li>
            <li><Link to="/disclaimer">Disclaimer</Link></li>
            <li><Link to="/ewaste">E-Waste</Link></li>
          </ul>
        </div>
 
        {/* Company Section */}
        <div className="footer-section">
          <h2 className="footer-title">Company</h2>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TechGroove. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
