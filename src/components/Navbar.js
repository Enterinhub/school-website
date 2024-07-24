import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/faculty">Faculty</Link>
        <Link to="/students">Students</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;