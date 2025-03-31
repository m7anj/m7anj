import React from 'react';
import './Skills.css';

const About = () => {
  return (
    <section id="about" className="about">
        
        <div className="technical-background">
          <h3>Skills</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4>Languages</h4>
              <ul>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>C#</li>
                <li>HTML/CSS</li>
                <li>PostgreSQL</li>
                <li>C</li>
                <li>TypeScript</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Frameworks</h4>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>JavaFX</li>
                <li>.NET</li>
                <li>JDBC</li>
                <li>Git</li>
                <li>Docker</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Other Skills</h4>
              <ul>
                <li>Database Design</li>
                <li>UI/UX Design</li>
                <li>System Architecture</li>
                <li>Technical Writing</li>
                <li>Video Editing</li>
                <li>Image Editing</li>
                <li>Audio Production</li>
                <li>Content Creation</li>
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;