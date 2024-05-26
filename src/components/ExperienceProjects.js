import React, { useState, useEffect } from 'react';
import '../App.css';

const ExperienceProjects = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setShowTooltip(true);
    }, 2000); 
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <section id="experience-projects" className="experience-projects-section section-content">
      <h2>Experience & Projects</h2>
      <div className="experience-projects-content">
        <div className="experience-content">
          <h3>Experience</h3>
          <ul>
            <li>
              <span className="experience-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><strong>Non-European Mobility Advisor</strong></span>
              {showTooltip && (
                <div className="tooltip">
                  <p>Enrolled in the Advisers Program for non-European mobility at Carlos III University of Madrid, where each adviser is
                    assigned a junior student to assist and help with course selection and any other questions they may have</p>
                </div>
              )}
              <br/>
              UC3M - <em>(2023,2024)</em>
            </li>
            <li>
              <span className="experience-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><strong>Private Lessons for High School Students</strong></span>
              {showTooltip && (
                <div className="tooltip">
                  <p>Private lessons in mathematics, physics, technical drawing, and chemistry for 1st and 2nd-year high school students.</p>
                </div>
              )}
              <br/>
              High School Students - <em>(2021,2022)</em>
            </li>
            <li>
              <span className="experience-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><strong>Webpage Development</strong></span>
              {showTooltip && (
                <div className="tooltip">
                  <p>Design of the website psicomasvideo.org, and of all its functionalities.</p>
                </div>
              )}
              <br/>
              Psicomasvideos - <em>2021</em>
            </li>
          </ul>
        </div>
        <div className="projects-content">
          <h3>Projects</h3>
          <ul>
          <li>
              <span className="experience-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><strong>Deep Learning Model to Promote Recycling</strong></span>
              {showTooltip && (
                <div className="tooltip">
                    <p><ul>
                        <li>Using a database of waste images, Python programming of a deep learning model that identifies the type of waste
                            in a user-uploaded photo and assigns it to a specific container.</li>
                        <li>Data preprocessing, creation, and comparison of various different neural networks, and using the most effective one
                            to create a function that identifies the waste and assigns it to its corresponding container.</li>
                    </ul></p>
                </div>
              )}
              <br/>
              <a href="https://github.com/AlejandroTaboadaEsteban/Deep-Learning-model-for-Recycling.git" target="_blank" rel="noreferrer">Link to the project</a> - <em>2023</em>
            </li>
            <li>
              <span className="experience-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><strong>Alternative PACMAN Game</strong></span>
              {showTooltip && (
                <div className="tooltip">
                    <p><ul>
                        <li>Programming of an alternative PACMAN game to the original.</li>
                        <li>Implementation of a machine learning model that makes PACMAN move in the most efficient way to eat all the
                            ghosts in the shortest possible time</li>
                        <li>Implementation of a machine learning model that makes PACMAN move in the most efficient way to eat all the
                            ghosts in the shortest possible time</li>
                    </ul></p>
                </div>
              )}
              <br/>
              <a href="https://github.com/AlejandroTaboadaEsteban/PacManML.git" target="_blank" rel="noreferrer">Link to the project</a> - <em>2022</em>
            </li>
            <li>
              <span className="experience-title" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><strong>Super Mario Bros Game</strong></span>
              {showTooltip && (
                <div className="tooltip">
                    <p><ul>
                        <li>Python programming of the classic Super Mario game.</li>
                        <li>Design of the appearance of characters and background, as well as a user-friendly interface</li>
                        <li>Programming of Mario's movement and behavior, as well as his interactions with map blocks, enemies, special
                            objects, lives, and points.</li>
                    </ul></p>
                </div>
              )}
              <br/>
              <a href="https://github.com/AlejandroTaboadaEsteban/Super-Mario-Game.git" target="_blank" rel="noreferrer">Link to the project</a> - <em>2021</em>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceProjects;
