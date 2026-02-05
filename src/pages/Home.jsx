import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bgVideo from "../assets/vedio.mp4";

function Home() {
  return (
    <div className="home-container">

      {/* Background Video */}
    <video className="bg-video" autoPlay muted loop>
  <source src={bgVideo} type="video/mp4" />
</video>


      {/* Top Navigation */}
      <div className="nav-buttons top">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/services"><button>Services</button></Link>
        <Link to="/contact"><button>Contact Us</button></Link>
      </div>

      {/* Center Content */}
      <div className="content">
        <h1>Welcome to My Website</h1>
        <p>Explore the beauty 🌿</p>
      </div>

    </div>
  );
}

export default Home;
