import React from 'react';
import Timeline from '../Timeline/Timeline';
import experienceData from '../../data/experience.json';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <Timeline items={experienceData} />
      </div>
    </section>
  );
};

export default Experience;