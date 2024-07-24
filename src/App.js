import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Admission from './components/Admission';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Student />} />
          {/* <Route path="/gallery" element={<Gallery />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
