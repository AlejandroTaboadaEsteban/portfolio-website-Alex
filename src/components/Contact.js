import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section-content">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-sentence">
            Don't be shy! Hit me up! 👇
        </div><br/>
        <div className="contact-mail">
        mail: <a href="mailto:taboadaestebanalex@gmail.com" rel="noreferrer" className="email-button">
        taboadaestebanalex@gmailcom
          </a><br/> <br/> <br/> <br/> 
        </div>
        <div className="contact-buttons">
            <a href="https://www.linkedin.com/in/alejandro-taboada-esteban-b2b0652b2" target="_blank" rel="noreferrer" className="contact-button linkedin-button">
              LinkedIn <img src="images/linkedin.webp" alt="LinkedIn Logo" />
            </a>
            <a href="https://github.com/AlejandroTaboadaEsteban" target="_blank" rel="noreferrer" className="contact-button github-button">
              Github <img src="images/github.png" alt="GitHub Logo"/>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;