import React from 'react';
import '../assests/styles/About.css';
import myImage from '../assests/images/profile.jpg';

const AboutEducation = () => {
  return (
    <section className="model-about-edu" id="about">
      <h2 className="section-heading">About Me & Education</h2>

      <div className="model-container">
        {/* Left: Profile and About */}
        <div className="about-card">
          <div className="image-container">
            <img src={myImage} alt="Profile" />
          </div>
          <div className="about-text">
            <p>
              I’m a passionate web developer focused on building responsive and user-friendly interfaces. My interests lie in React, JavaScript, and creating visually appealing websites.
            </p>
            <p>
              I am currently pursuing my Computer Science degree and actively working on real-world projects to sharpen my skills.
            </p>
          </div>
        </div>

        {/* Right: Education Cards */}
        <div className="education-column">
          <div className="edu-card">
            <h4>B.E. Computer Science & Engineering</h4>
            <p>Dr. G U Pope College of Engineering, Thoothukudi (2021–2025)</p>
          </div>
          <div className="edu-card">
            <h4>HSC – Mathsbiology</h4>
            <p>Infint Matric Higher Secondary School (2019–2021)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;
