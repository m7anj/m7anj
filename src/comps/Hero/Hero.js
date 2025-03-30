import React from 'react';
import { FaGithub, FaLinkedin, FaCodepen, FaInstagram, FaGlobe, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Manjeev Takhar</h1>

        <div className="hero-subtitles-container">
            <span className="hero-subtitle">Computer Science Student</span>
            <span className="hero-subtitle2"> | Aspiring Software Developer</span>
        </div>
        
        <p className="hero-description">
          I am a Computer Science student at <b>University of Birmingham</b> with a passion for software development. I love creating innovative solutions and exploring new technologies. My goal is to become a proficient software developer and contribute to exciting projects.
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