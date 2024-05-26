import React from 'react';
import '../App.css';
import ParticlesBackground from './ParticlesBackground';

const Home = () => {
  return (
    <section id="home" className="home-section section-content">
      <ParticlesBackground />
      <h2>Home</h2>
      <div className="home-content">
        <div className="home-text-content">
          <h2>Alejandro Taboada - Data Scientist</h2>
          <p>
            Hi, I am Alejandro, a Data Science and Engineering student from A Coruña, Spain
          </p>
          <div className="home-flags">
            <div className="spain-flag">
              <a href="https://www.google.es/maps/place/Espa%C3%B1a/@28.0524766,-49.3199437,4z/data=!3m1!4b1!4m6!3m5!1s0xc42e3783261bc8b:0xa6ec2c940768a3ec!8m2!3d40.463667!4d-3.74922!16zL20vMDZta2o?hl=es&entry=ttu" target="_blank" rel="noreferrer">
                <img src="images/spain.jpg" alt="Spain Flag" />
              </a>
            </div>
            <div className="galicia-flag">
              <a href="https://www.google.es/maps/place/Galicia,+Espa%C3%B1a/@42.7923013,-9.3369391,8z/data=!3m1!4b1!4m6!3m5!1s0xd2e7c868908156b:0xe1ac7930138c9642!8m2!3d42.5750554!4d-8.1338558!16zL20vMDNjYjg?hl=es&entry=ttu" target="_blank" rel="noreferrer">
                <img src="images/galicia.png" alt="Galicia Flag" />
              </a>
            </div>
          </div>
        </div>
        <div className="home-image-content">
          <img src="images/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;