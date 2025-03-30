import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaNewspaper } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Manjeev Takhar</h1>

        <div className="hero-subtitles-container">
            <span className="hero-subtitle">BSc Computer Science Student</span>
            <span className="hero-subtitle2"> | University of Birmingham</span>
        </div>
        
        <p className="hero-description">
        I am 2nd Year Computer Science student at University of Birmingham with a passion for
         technology and problem-solving. Exploring various development frameworks and security 
         concepts, I enjoy building practical solutions that make an impact. Currently focused 
         on expanding my skills in software development while discovering new areas of interest
         in the tech landscape.
        </p>
        
        <div className="social-links">
          <a href="https://github.com/m7anj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/manjeevtakhar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://youtube.com/@alludetech" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.instagram.com/m7anj/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://leetcode.com/u/m7anj/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;