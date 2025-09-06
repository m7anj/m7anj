import React, { useState } from 'react';
import './Experience.css';

const Experience = () => {
  

  const experiences = [
    {
      title: "Software Development Intern",
      company: "BuySure Trust & Insurance Services GB Ltd",
      location: "Cheshire, UK",
      period: "June 2025 - Sept 2025",
      preview: "Developed a Financial Rates Insights dashboard and streamlined internal processes for insurance brokers.",
      description: [
        "Developed a Financial Rates & Insights dashboard using React, integrating Bank of England API, mortgage rate feeds, and currency exchange widgets.",
        "Conducted a UX audit, improving mobile responsiveness and achieving WCAG AA compliance across the company website for international clients.",
        "Prototyped a Quote Automation Assistant, reducing manual data entry by 60% and streamlining workflows for 15+ insurance brokers."
      ],
      techStack: ["React", "JavaScript", "API Integration", "UX/UI", "WCAG AA", "Node.js"]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      location: "Remote",
      period: "May 2024 - Present",
      preview: "Built custom websites and migrated platforms to secure hosting environments.",
      description: [
        "Built custom websites using React and CSS, enhancing accessibility and user experience across multiple devices.",
        "Migrated platforms to new hosting environments, ensuring improved security through SSL certificates and secure FTP/SSH protocols."
      ],
      techStack: ["React", "CSS", "JavaScript", "SSL", "FTP/SSH", "Web Development"]
    },
    {
      title: "Content Creator & Technology Reviewer",
      company: "AlludeTech YouTube Channel",
      location: "Remote",
      period: "2022 - Present",
      preview: "Grew a technology review channel to 520,000+ total viewers and managed sponsorships.",
      description: [
        "Created engaging tech content and secured paid sponsorships with tech companies for product reviews.",
        "Achieved 17.8% click-through rate (3x the industry average), growing the channel to 520,000+ viewers and 2,300+ subscribers."
      ],
      techStack: ["YouTube", "Content Creation", "Tech Reviews", "Audience Engagement"]
    }
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