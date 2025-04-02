import React from 'react';
import './Skills.css';
// Import icons
import { DiJavascript, DiPython, DiJava, DiHtml5, DiCss3, DiPostgresql, DiReact, DiNodejs, DiGit, DiDocker } from 'react-icons/di';
import { SiTypescript, SiExpress, SiDotnet, SiSharp } from 'react-icons/si';
import { VscDatabase } from 'react-icons/vsc';
import { MdDesignServices } from 'react-icons/md';
import { GoFileCode } from 'react-icons/go';
import { BiCodeAlt } from 'react-icons/bi';
import { FaLaptopCode, FaVideo, FaImage, FaHeadphones, FaYoutube } from 'react-icons/fa';

const About = () => {
  // Define skills with their icons
  const languages = [
    { name: "JavaScript", icon: <DiJavascript className="skill-icon" /> },
    { name: "Python", icon: <DiPython className="skill-icon" /> },
    { name: "Java", icon: <DiJava className="skill-icon" /> },
    { name: "C#", icon: <SiSharp className="skill-icon" /> },
    { name: "  HTML/CSS", icon: <div className="icon-group"><DiCss3 className="skill-icon" /></div> },
    { name: "PostgreSQL", icon: <DiPostgresql className="skill-icon" /> },
    { name: "C", icon: <BiCodeAlt className="skill-icon" /> },
    { name: "TypeScript", icon: <SiTypescript className="skill-icon" /> }
  ];
  
  const frameworks = [
    { name: "React.js", icon: <DiReact className="skill-icon" /> },
    { name: "Node.js", icon: <DiNodejs className="skill-icon" /> },
    { name: "Express.js", icon: <SiExpress className="skill-icon" /> },
    { name: "JavaFX", icon: <DiJava className="skill-icon" /> },
    { name: ".NET", icon: <SiDotnet className="skill-icon" /> },
    { name: "JDBC", icon: <DiJava className="skill-icon" /> },
    { name: "Git", icon: <DiGit className="skill-icon" /> },
    { name: "Docker", icon: <DiDocker className="skill-icon" /> }
  ];
  
  const otherSkills = [
    { name: "Database Design", icon: <VscDatabase className="skill-icon" /> },
    { name: "UI/UX Design", icon: <MdDesignServices className="skill-icon" /> },
    { name: "System Architecture", icon: <FaLaptopCode className="skill-icon" /> },
    { name: "Technical Writing", icon: <GoFileCode className="skill-icon" /> },
    { name: "Video Editing", icon: <FaVideo className="skill-icon" /> },
    { name: "Image Editing", icon: <FaImage className="skill-icon" /> },
    { name: "Audio Production", icon: <FaHeadphones className="skill-icon" /> },
    { name: "Content Creation", icon: <FaYoutube className="skill-icon" /> }
  ];

  return (
    <section id="about" className="about">
        <div className="technical-background">
          <h3>Skills</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4>Languages</h4>
              <ul>
                {languages.map((skill, index) => (
                  <li key={index}>
                    <span className="skill-icon-container">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Frameworks</h4>
              <ul>
                {frameworks.map((skill, index) => (
                  <li key={index}>
                    <span className="skill-icon-container">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="skill-category">
              <h4>Other Skills</h4>
              <ul>
                {otherSkills.map((skill, index) => (
                  <li key={index}>
                    <span className="skill-icon-container">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;