import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

// Import images
import parisImg from "../assets/paris.jpg";
import maldives from "../assets/maldives.jpg";
import alps from "../assets/alps.jpg";
import tokyo from "../assets/tokyo.jpg";

const places = [
  {
    name: "Paris",
    image: parisImg,
    description: `The city of lights, romance, and iconic Eiffel Tower. 
    Enjoy cafes, art museums, and beautiful streets. 
    Perfect for a romantic getaway. 
    Explore historic landmarks and scenic views. 
    Experience French culture and cuisine.`
  },
  {
    name: "Maldives",
    image: maldives,
    description: `Crystal clear waters, white sandy beaches, and paradise vibes. 
    Ideal for water sports and island hopping. 
    Relax in overwater villas and sunsets. 
    Perfect tropical escape for couples or families. 
    Enjoy snorkeling and marine life adventures.`
  },
  {
    name: "Tokyo",
    image: tokyo,
    description: `A perfect mix of tradition and futuristic city life. 
    Explore shrines, temples, and neon-lit streets. 
    Delicious street food and sushi culture. 
    Trendy fashion districts and pop culture hotspots. 
    Vibrant nightlife and modern architecture.`
  },
  {
    name: "Swiss Alps",
    image: alps,
    description: `Snowy mountains, scenic landscapes, and adventure. 
    Skiing, hiking, and alpine villages await. 
    Enjoy breathtaking panoramic views. 
    Perfect for nature and adventure lovers. 
    Cozy cabins and fresh mountain air.`
  }
];

function About() {
  return (
    <div className="about-container">
      {/* Navbar */}
      <div className="nav-buttons">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/services"><button>Services</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </div>

      {/* Page Content */}
      <h1 className="about-title">Explore Amazing Destinations</h1>

      <div className="places-list">
        {places.map((place, index) => (
          <div
            key={index}
            className={`place-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="place-image">
              <img src={place.image} alt={place.name} />
            </div>
            <div className="place-description">
              <h2>{place.name}</h2>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Travel Explorer</h3>
          <p>Discover the world with unforgettable journeys 🌍</p>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <p className="footer-copy">
            © 2026 Travel Explorer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;
