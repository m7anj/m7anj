import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "IT Support Work Experience",
      company: "Superfast IT",
      location: "Stourbridge, UK",
      period: "June 2022",
      preview: "Gained practical hands-on work experience in IT support and cybersecurity",
      description: [
        "Gained practical hands-on experience in IT support, technology support and cybersecurity",
        "Utilized computational skills in IT management, system monitoring, and data recovery",
        "Contributed to customer support tasks, leveraging technical skills for cybersecurity",
        "Enhanced communication skills while working effectively in a team environment"
      ],
      techStack: ["Windows Server", "Networking", "Data Recovery", "Security Tools"]
    },
    {
      title: "Full Stack Developer",
      company: "Singh Tickets Ltd",
      location: "Remote",
      period: "December 2024 - Present",
      preview: "Developed & Maintaining ticket dashboard & marketplace with real-time transaction processing.",
      description: [
        "Built a full-stack ticket management dashboard using React, Node.js, and MongoDB to handle ticket inventory and sales",
        "Created a secure payment processing system integrated with Stripe for seamless customer transactions",
        "Designed analytics tools to track sales performance and identify high-demand events"
      ],
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io"]
    }

    // !! ADD MORE JOBS HERE !!

  ];

  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (index) => {
    if (expandedIds.includes(index)) {
      setExpandedIds(expandedIds.filter(id => id !== index));
    } else {
      setExpandedIds([...expandedIds, index]);
    }
  };

  return (
    <section id="experience" className="experience">
      <div className="experience-content">
        <h3>Experience</h3>
        <div className="timeline-container">
          {experiences.map((job, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker"></div>
              <div 
                className={`timeline-content ${expandedIds.includes(index) ? 'expanded' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                <span className="timeline-period">{job.period}</span>
                <h4 className="job-title">{job.title}</h4>
                <div className="company-info">
                  <span className="company-name">{job.company}</span>
                  <span className="location-dot">•</span>
                  <span className="job-location">{job.location}</span>
                </div>
                
                {/* Show preview when collapsed */}
                {!expandedIds.includes(index) && (
                  <p className="job-preview">{job.preview}</p>
                )}

                {/* Show full details when expanded */}
                {expandedIds.includes(index) && (
                  <div className="expanded-content">
                    <ul className="job-description">
                      {job.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                    {job.techStack && (
                      <div className="tech-used">
                        <h5>Languages & Frameworks:</h5>
                        <div className="tech-tags">
                          {job.techStack.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="expand-indicator">
                  {expandedIds.includes(index) ? "Click to collapse" : "Click for details"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;