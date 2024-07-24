import React from 'react';

const Contact = () => {
  return (
    <div className="container contact">
      <h1>Contact Us</h1>
      <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
      <p>Phone: +1 (123) 456-7890</p>
      <p>Email: info@springdale.edu</p>
      <h2>Contact Form</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <h2>Location</h2>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789!2d-123.123456!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808123456789abcdef!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1234567890" 
        width="600" 
        height="450" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>
    </div>
  );
};

export default Contact;
