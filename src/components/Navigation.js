import React from 'react';
import '../App.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#education-skills">Education & Skills</a></li>
        <li><a href="#experience-projects">Experience & Projects</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
