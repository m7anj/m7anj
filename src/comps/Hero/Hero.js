import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiLeetcode, SiJavascript, SiTypescript, SiPython, SiReact, SiSpringboot, SiExpress, SiPostgresql, SiGit, SiOpenjdk } from 'react-icons/si';
import profilePic from '../../materials/me.jpeg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-image-container">
          <img src={profilePic} alt="Manjeev Takhar" className="hero-image" />
        </div>

        <h1>Manjeev Takhar</h1>
        <p className="hero-subtitle">
          I am a Computer Science Student at the University of Birmingham 
          (currently on leave to find work experience before graduation).
          I enjoy building projects, tools and systems to make an impact 
          in the world, for both myself and the people around me.
        </p>

        <p className="hero-bio">
           Currently exploring the world of startups, low-level security
            and system's programming concepts, and creating tools that 
            make our lives easier.

          <p style={{
            fontStyle:'italic',
            fontSize:"10px",
            paddingTop:"10px",
            color:"#555"
          }}>Currently working on
            <a href = "https://techpad.app"> techpad.app</a>
          ! could do with a bit of help lol @m7anj on discord pls
          </p>
        </p>

        

        <div className="hero-tech">
          <h3>Technologies</h3>
          <div className="tech-grid">
            <div className="tech-item" title="JavaScript">
              <SiJavascript />
              <span>JavaScript</span>
            </div>
            <div className="tech-item" title="TypeScript">
              <SiTypescript />
              <span>TypeScript</span>
            </div>
            <div className="tech-item" title="Python">
              <SiPython />
              <span>Python</span>
            </div>
            <div className="tech-item" title="Java">
              <SiOpenjdk />
              <span>Java</span>
            </div>
            <div className="tech-item" title="React">
              <SiReact />
              <span>React</span>
            </div>
            <div className="tech-item" title="Spring Boot">
              <SiSpringboot />
              <span>Spring Boot</span>
            </div>
            <div className="tech-item" title="Express">
              <SiExpress />
              <span>Express</span>
            </div>
            <div className="tech-item" title="PostgreSQL">
              <SiPostgresql />
              <span>PostgreSQL</span>
            </div>
            <div className="tech-item" title="Git">
              <SiGit />
              <span>Git</span>
            </div>
          </div>
        </div>

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