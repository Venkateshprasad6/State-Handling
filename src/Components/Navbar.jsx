import React from "react";
import { Link } from "react-router-dom";
import "../Components/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <h1>Grossery</h1>

        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
