import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../Card/Card';
import projectsData from '../../data/projects.json';
import './Projects.css';

const Projects = () => {
  const featuredProjects = projectsData.filter(p => p.featured);
  const allProjects = projectsData.filter(p => p.status !== 'private');

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {featuredProjects.map(project => (
            <Card key={project.id} hover>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.links?.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                )}
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        <h3 className="section-subtitle">Other Projects</h3>
        <div className="projects-list">
          {allProjects.filter(p => !p.featured).map(project => (
            <div key={project.id} className="project-item">
              <div>
                <h4>{project.title}</h4>
                <p className="text-secondary">{project.description}</p>
                <div className="project-tech-inline">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-item-links">
                {project.links?.repo && (
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
                {project.links?.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;