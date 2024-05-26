import React from 'react';
import '../App.css';

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section section-content">
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="about-me-text">
          <p>
            I was born in 2003 in A Coruña and, after finishing High School, in 2021 I moved to Madrid to study the degree of
             Data Science and Engineering in the university Carlos III of Madrid. There I discovered a new world and got very 
            interested about data science. I made projects and learned a lot, and in 2023 I moved to UCR thanks to an international
            exchange program, and I will be here until the end of the academic year. I am planing on ending my degree next May and 
            I am very enthusiastic to enter the world of work of this sector I love. <br/>
            I am a hard-working, creative and proactive person with strong determination and leadership skills, probably due to
            experiences in sport competitions. I also like to practice sport and outdoor activities
          </p>
          <p>
            <a href="https://github.com/AlejandroTaboadaEsteban/CV/blob/425af339152b632f4a88bd306f4c77d542f3aa49/ALEJANDRO%20TABOADA%20RESUME%202024.pdf" target="_blank" rel="noopener noreferrer">View my resume</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;