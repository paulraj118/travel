import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/vedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="nav-buttons">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/services"><button>Services</button></Link>
        <Link to="/contact"><button>Contact Us</button></Link>
      </div>

      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>Explore the beauty 🌿</p>
      </div>
    </div>
  );
}

export default Home;
