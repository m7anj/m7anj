import React, { useState, useEffect } from 'react';
import { FaGithub, FaStar, FaCodeBranch, FaExclamationCircle } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/m7anj/repos', {
          headers: {
            ...(process.env.REACT_APP_GITHUB_TOKEN && {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
            })
          }
        });
        
        if (!response.ok) {
          throw new Error(`GitHub API responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Filter out forked repositories and sort by most recently updated
        const filteredProjects = data
          .filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
          .slice(0, 6); // Limit to 6 projects
        
        setProjects(filteredProjects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repositories:", error);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);
  
  if (loading) {
    return (
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="loading">Loading projects...</div>
        </div>
      </section>
    );
  }
  
  if (error) {
    return (
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="error">{error}</div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div ClassName="section-subtitle">
        <h6>fetched from github.com/m7anj/repos, subject to vary.</h6>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <FaGithub className="project-icon" />
                <h3 className="project-title">{project.name}</h3>
              </div>
              
              <p className="project-description">
                {project.description || 'No description available'}
              </p>
              
              <div className="project-tech">
                <span className="language-tag">
                  {project.language || 'Various'}
                </span>
              </div>
              
              <div className="project-meta">
                <div className="project-stats">
                  <span><FaStar /> {project.stargazers_count}</span>
                  <span><FaCodeBranch /> {project.forks_count}</span>
                  <span><FaExclamationCircle /> {project.open_issues_count}</span>
                </div>
                
                <div className="project-links">
                  <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                    View Repository
                  </a>
                  
                  {project.homepage && (
                    <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="view-all">
          <a href="https://github.com/m7anj?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;