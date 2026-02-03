import { Link } from "react-router-dom";
import { useRef } from "react";

function Navbar() {
  const navRef = useRef(null); // ✅ inside component

  return (
    <nav ref={navRef}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
