import React from 'react';
import '../App.css';

const EducationSkills = () => {
  return (
    <section id="education-skills" className="education-skills-section section-content">
        <h2>Education & Skills</h2>
        <div className="education-skills-content">
        <div className="education-content">
            <h3>Education</h3>
            <ul>
                 <li><strong><a href="https://www.ucr.edu/" target="_blank" rel="noreferrer">University of California Riverside</a></strong> - Bachelor in Data Science and Engineering, international Student <br/>
                 California, United States - <em>(2023, Today)</em></li>
                <li><strong><a href="https://www.uc3m.es/Inicio" target="_blank" rel="noreferrer">Universidad Carlos III Madrid </a></strong> - Bachelor in Data Science and Engineering <br/>
                 Madrid, Spain - <em>(2021, Today)</em></li>
                 <li><strong><a href="https://ciamariacoruna.org/gl/" target="_blank" rel="noreferrer">Colexio Plurilíngüe Compañía de María a Coruña </a></strong> - High School <br/>
                 A Coruña, Spain - <em>(2018, 2021)</em></li>
            </ul>
         </div>
         <div className="skills-content">
            <h3>Skills</h3>
            <ul>
                <li><h4>Programming Languages</h4>
                <ul>
                <li>Python</li>
                <li>R</li>
                <li>MATLAB</li>
                <li>Java</li>
                <li>SQL</li>
                <li>HTML</li>
                </ul></li>
                <li><h4>Data Bases</h4>
                <ul>
                <li>Oracle</li>
                <li>MongoDB</li>
                <li>Microsoft SQL Server</li>
                </ul></li>
                <li><h4>Languages</h4>
                <ul>
                <li>Spanish</li>
                <li>Galician</li>
                <li>English</li>
                <li>French</li>
                <li>Italian</li>
                </ul></li>
            </ul>
            <br/>
        </div>
        </div>
        <div className="image-group">
            <img src="images/python.png" alt="Python logo" />
            <img src="images/R.png" alt="R logo" />
            <img src="images/MATLAB.png" alt="MATLAB logo" />
            <img src="images/java.png" alt="Java logo" />
            <img src="images/SQL.png" alt="SQL logo" />
            <img src="images/HTML.png" alt="HTML logo" />
            <img src="images/oracle.svg" alt="Oracle logo" />
            <img src="images/mongo.png" alt="MongoDB logo" />
            <img src="images/MicSQL.svg" alt="Microsoft SQL Server logo" />
            <img src="images/spain.jpg" alt="Spain flag" />
            <img src="images/galicia.png" alt="Galicia flag" />
            <img src="images/england.svg" alt="England flag" />
            <img src="images/france.png" alt="France flag" />
            <img src="images/italia.png" alt="Italy flag" />
        </div>
    </section>
  );
};

export default EducationSkills;