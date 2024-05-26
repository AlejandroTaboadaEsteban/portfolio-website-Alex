import React from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import EducationSkills from './components/EducationSkills';
import ExperienceProjects from './components/ExperienceProjects';
import Interests from './components/Interests';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <AboutMe />
      <EducationSkills />
      <ExperienceProjects />
      <Interests />
      <Contact />
    </div>
  );
}

export default App;
