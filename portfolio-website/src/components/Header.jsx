import React, { useState } from 'react';
import '../assests/styles/Header.css'
import profilePic from '../assests/images/profile.webp'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileDetails = () => setShowProfileDetails(!showProfileDetails);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Ida Selvam Magdaline J</h1>
          <p>Front-End Developer</p>
        </div>

        <div className="header-actions">
          {/* Mobile Menu Toggle */}
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>

          {/* Profile Picture */}
          <div className="profile-container">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-pic"
              onClick={toggleProfileDetails}
            />
            {showProfileDetails && (
              <div className="profile-details">
                <p><strong>Ida Selvam Magdaline J</strong></p>
                <p>Front-End Developer</p>
                <a href="http://linkedin.com/in/idaselvammagdaline/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            )}
          </div>
      </div>
    </header>
    
  );
}

export default Header;
