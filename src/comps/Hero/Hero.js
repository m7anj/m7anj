import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Manjeev Takhar</h1>
        <p className="hero-subtitle">
          BSc Computer Science Student at University of Birmingham
        </p>

        <p className="hero-bio">
          2nd year CS student with a passion for building practical solutions.
          Exploring web development, security concepts, and creating tools that make an impact.
        </p>

        <div className="hero-links">
          <a href="https://github.com/m7anj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/manjeevtakhar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://youtube.com/@alludetech" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube size={20} />
          </a>
          <a href="https://leetcode.com/u/m7anj/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <SiLeetcode size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;