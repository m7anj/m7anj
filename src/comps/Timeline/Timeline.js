import React, { useState } from 'react';
import './Timeline.css';

const TimelineItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="timeline-item">
      <div className="timeline-marker"></div>
      <div
        className={`timeline-content ${isExpanded ? 'expanded' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="timeline-header">
          <div>
            <h4 className="timeline-role">{item.role}</h4>
            <div className="timeline-company">
              <span>{item.company}</span>
              {item.location && (
                <>
                  <span className="separator">•</span>
                  <span>{item.location}</span>
                </>
              )}
            </div>
          </div>
          <span className="timeline-period">{item.period}</span>
        </div>

        <p className="timeline-description">{item.description}</p>

        {isExpanded && item.responsibilities && (
          <ul className="timeline-list">
            {item.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        )}

        {isExpanded && item.tech && (
          <div className="timeline-tech">
            {item.tech.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}

        <div className="timeline-toggle">
          {isExpanded ? '↑ Show less' : '↓ Show more'}
        </div>
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Timeline;
