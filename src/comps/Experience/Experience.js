import React, { useState } from 'react';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiCss3,
  SiHtml5,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiD3Dotjs,
  SiFirebase,
  SiSqlite,
  SiTensorflow,
  SiThreedotjs,
  SiAdobe,
  SiSpringboot,
  SiOpenjdk
} from 'react-icons/si';
import { FaLock, FaNetworkWired, FaDesktop, FaPlug } from 'react-icons/fa';
import Modal from '../Modal/Modal';
import experienceData from '../../data/experience.json';
import './Experience.css';

const getTechIcon = (tech) => {
  const iconMap = {
    'React': SiReact,
    'JavaScript': SiJavascript,
    'Node.js': SiNodedotjs,
    'Python': SiPython,
    'CSS': SiCss3,
    'HTML': SiHtml5,
    'TypeScript': SiTypescript,
    'Express': SiExpress,
    'PostgreSQL': SiPostgresql,
    'MongoDB': SiMongodb,
    'Redis': SiRedis,
    'Socket.io': SiSocketdotio,
    'D3.js': SiD3Dotjs,
    'Firebase': SiFirebase,
    'SQLite': SiSqlite,
    'TensorFlow': SiTensorflow,
    'TensorFlow.js': SiTensorflow,
    'Three.js': SiThreedotjs,
    'Adobe Premiere': SiAdobe,
    'Video Editing': SiAdobe,
    'API Integration': FaPlug,
    'Remote Desktop': FaDesktop,
    'Network Troubleshooting': FaNetworkWired,
    'SSL/TLS': FaLock,
    'Spring Boot': SiSpringboot,
    'Java': SiOpenjdk,
  };

  const IconComponent = iconMap[tech];
  return IconComponent ? <IconComponent className="tech-icon-inline" /> : null;
};

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <>
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>

          <div className="experience-grid">
            {experienceData.map((exp) => (
              <div
                key={exp.id}
                className="experience-card"
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="experience-content-wrapper">
                  <div className="experience-header">
                    <div className="experience-title-row">
                      <div className="experience-icon">
                        {exp.iconImage ? (
                          <img
                            src={require(`../../data/icons/${exp.iconImage}`)}
                            alt={exp.company}
                            className="experience-icon-img"
                          />
                        ) : (
                          <span className="experience-icon-emoji">{exp.icon}</span>
                        )}
                      </div>
                      <div className="experience-title-text">
                        <h3>{exp.role}</h3>
                        <div className="experience-company">{exp.company}</div>
                      </div>
                      {exp.current && <span className="badge-current">Now</span>}
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  {exp.tech && exp.tech.length > 0 && (
                    <div className="experience-tech">
                      {exp.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {getTechIcon(tech)}
                          <span className="tech-name">{tech}</span>
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
      >
        {selectedExperience && (
          <div className="experience-modal">
            <div className="modal-icon">
              {selectedExperience.iconImage ? (
                <img
                  src={require(`../../data/icons/${selectedExperience.iconImage}`)}
                  alt={selectedExperience.company}
                  className="modal-icon-img"
                />
              ) : (
                <span className="modal-icon-emoji">{selectedExperience.icon}</span>
              )}
            </div>
            <h2>{selectedExperience.role}</h2>
            <h3 className="modal-company">{selectedExperience.company}</h3>
            <div className="modal-meta">
              <span>{selectedExperience.period}</span>
              <span>•</span>
              <span><FaMapMarkerAlt /> {selectedExperience.location}</span>
            </div>

            {selectedExperience.detailedDescription && (
              <div className="modal-section">
                <h4>Overview</h4>
                <p>{selectedExperience.detailedDescription}</p>
              </div>
            )}

            {selectedExperience.responsibilities && selectedExperience.responsibilities.length > 0 && (
              <div className="modal-section">
                <h4>Key Responsibilities</h4>
                <ul>
                  {selectedExperience.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedExperience.achievements && selectedExperience.achievements.length > 0 && (
              <div className="modal-section">
                <h4>Achievements</h4>
                <ul className="achievements-list">
                  {selectedExperience.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedExperience.tech && selectedExperience.tech.length > 0 && (
              <div className="modal-section">
                <h4>Technologies</h4>
                <div className="modal-tech">
                  {selectedExperience.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {getTechIcon(tech)}
                      <span className="tech-name">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedExperience.skills && selectedExperience.skills.length > 0 && (
              <div className="modal-section">
                <h4>Skills</h4>
                <div className="modal-skills">
                  {selectedExperience.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            )}

            {selectedExperience.links && (
              <div className="modal-section">
                <h4>Links</h4>
                <div className="modal-links">
                  {Object.entries(selectedExperience.links).map(([key, url]) => (
                    <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="modal-link">
                      {key.charAt(0).toUpperCase() + key.slice(1)} <FaExternalLinkAlt />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Experience;
