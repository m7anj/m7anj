import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCalendar, FaLock, FaNetworkWired, FaDesktop, FaPlug } from 'react-icons/fa';
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
  SiChartdotjs,
  SiFirebase,
  SiSqlite,
  SiTensorflow,
  SiThreedotjs,
  SiAdobe,
  SiSpringboot,
  SiOpenjdk,
  SiFlask,
  SiScikitlearn,
  SiNetlify
} from 'react-icons/si';
import Modal from '../Modal/Modal';
import projectsData from '../../data/projects.json';
import './Projects.css';

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
    'Chart.js': SiChartdotjs,
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
    'WebSocket': SiSocketdotio,
    'Flask': SiFlask,
    'scikit-learn': SiScikitlearn,
    'Machine Learning': SiTensorflow,
    'NLP': SiPython,
    'Deepgram API': FaPlug,
    'Chrome Extension API': FaPlug,
    'Claude API': FaPlug,
    'Bank of England API': FaPlug,
    'Form Automation': FaPlug,
    'Netlify': SiNetlify,
  };

  const IconComponent = iconMap[tech];
  return IconComponent ? <IconComponent className="tech-icon-inline" /> : null;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const visibleProjects = projectsData.filter(p => p.status !== 'private');

  return (
    <>
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-list">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="project-item"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-icon-wrapper">
                  <div className="project-icon-large">
                    {project.iconImage ? (
                      <img
                        src={require(`../../data/icons/${project.iconImage}`)}
                        alt={project.title}
                        className="project-icon-img"
                      />
                    ) : (
                      <span className="project-icon-emoji">{project.icon}</span>
                    )}
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-header-row">
                    <h3>{project.title}</h3>
                    <div className="project-badges">
                      {project.status === 'in-progress' && (
                        <span className="badge-status">In Progress</span>
                      )}
                      <span className="project-date">
                        <FaCalendar /> {project.date}
                      </span>
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tech-row">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {getTechIcon(tech)}
                        <span className="tech-name">{tech}</span>
                      </span>
                    ))}
                  </div>

                  {project.links && (
                    <div className="project-quick-links" onClick={(e) => e.stopPropagation()}>
                      {project.links.repo && (
                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                          <FaGithub />
                        </a>
                      )}
                      {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="project-modal">
            <div className="modal-icon-large">
              {selectedProject.iconImage ? (
                <img
                  src={require(`../../data/icons/${selectedProject.iconImage}`)}
                  alt={selectedProject.title}
                  className="modal-project-icon-img"
                />
              ) : (
                <span className="modal-project-icon-emoji">{selectedProject.icon}</span>
              )}
            </div>
            <h2>{selectedProject.title}</h2>
            <div className="modal-badges">
              {selectedProject.status === 'in-progress' && (
                <span className="badge-status">In Progress</span>
              )}
              <span className="modal-date"><FaCalendar /> {selectedProject.date}</span>
            </div>

            {selectedProject.detailedDescription && (
              <div className="modal-section">
                <h4>Overview</h4>
                <p>{selectedProject.detailedDescription}</p>
              </div>
            )}

            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="modal-section">
                <h4>Features</h4>
                <ul>
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedProject.highlights && selectedProject.highlights.length > 0 && (
              <div className="modal-section">
                <h4>Highlights</h4>
                <ul className="highlights-list">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedProject.tech && selectedProject.tech.length > 0 && (
              <div className="modal-section">
                <h4>Technologies</h4>
                <div className="modal-tech">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {getTechIcon(tech)}
                      <span className="tech-name">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedProject.links && (
              <div className="modal-section">
                <h4>Links</h4>
                <div className="modal-links">
                  {selectedProject.links.demo && (
                    <a href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="modal-link-button">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {selectedProject.links.repo && (
                    <a href={selectedProject.links.repo} target="_blank" rel="noopener noreferrer" className="modal-link-button">
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
};

export default Projects;
