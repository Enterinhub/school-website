import React from 'react';

const Home = () => {
  return (
    <div className="container home">
      <h1>Welcome to Springdale Public School</h1>
      <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      <div className="carousel">
        <div>Annual Sports Day - Celebrating Excellence in Sports</div>
        <div>Science Exhibition - Showcasing Student Innovations</div>
        <div>Cultural Fest - Embracing Diversity and Creativity</div>
      </div>
      <div className="quick-links">
        <a href="/about">About Us</a>
        <a href="/admissions">Admissions</a>
        <a href="/contact">Contact Us</a>
      </div>
    </div>
  );
};

export default Home;
