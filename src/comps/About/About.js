import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2 className="section-title">About</h2>
        
        <div className="about-text">
          <p>
            I'm a Computer Science student at the University of Birmingham, passionate about creating 
            efficient and intuitive software solutions. My academic journey has equipped me with a strong 
            foundation in programming principles, algorithms, and software engineering practices.
          </p>
          
          <p>
            Throughout my studies, I've developed expertise in a variety of technologies including Java, 
            JavaScript, React, and C#. I particularly enjoy working on projects that challenge me to think 
            creatively about database architecture, user interfaces, and system optimization.
          </p>
          
          <p>
            My experience extends beyond the classroom, having gained practical knowledge through an IT 
            support role at Superfast IT where I strengthened my skills in technology support and 
            cybersecurity. This hands-on experience has given me valuable insights into real-world 
            applications of computer science principles.
          </p>
          
          <p>
            When I'm not coding, I channel my technical knowledge into creating educational content through 
            my YouTube channel, where I review technology and share computing insights. I'm also passionate 
            about media creation, having developed skills in video and image editing with tools like Vegas Pro 
            and Adobe Photoshop.
          </p>
          
          <p>
            I'm constantly seeking opportunities to expand my knowledge and apply my skills in meaningful ways. 
            Whether it's developing a multi-threaded database application, creating an educational arithmetic game, 
            or collaborating on a code submission system, I approach each project with enthusiasm and a 
            commitment to excellence.
          </p>
        </div>
        
        <div className="technical-background">
          <h3>Technical Background</h3>
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
              <h4>Tools & Technologies</h4>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;