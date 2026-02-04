import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

import flight from "../assets/flight.jpg";
import hotel from "../assets/hotel.jpg";
import tour from "../assets/tour.jpg";
import support from "../assets/support.jpg";

function Services() {
  const services = [
    {
      title: "Flight Booking",
      image: flight,
      description:
        "Book domestic and international flights at the best prices with easy and fast booking."
    },
    {
      title: "Hotel Reservation",
      image: hotel,
      description:
        "Luxury to budget-friendly hotels with comfort, safety, and amazing views."
    },
    {
      title: "Tour Packages",
      image: tour,
      description:
        "Customized tour packages for couples, families, and adventure lovers."
    },
    {
      title: "24/7 Support",
      image: support,
      description:
        "Our travel experts are available anytime to assist you throughout your journey."
    }
  ];

  return (
    <div className="services-container">
      {/* Navbar */}
      <div className="nav-buttons">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/services"><button>Services</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
      </div>

      <div className="services-overlay">
        <h1 className="services-title">Our Services</h1>
        <p className="services-subtitle">
          Making your travel experience smooth & unforgettable ✈️
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
