import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

import bgVideo from "../assets/vedio-bg.mp4";

function Contact() {
  return (
    <div className="contact-container">
      {/* Background Video */}
      <video className="bg-video" autoPlay muted loop>
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="video-overlay"></div>

      {/* Navbar */}
      <div className="nav-buttons">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/services"><button>Services</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </div>

      {/* Contact Card */}
      <div className="contact-card">
        <h1>Contact Us</h1>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <br />
      <br />

      {/* Footer */}
      <footer className="contact-footer">
        <p>© 2026 Travel Explorer. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
