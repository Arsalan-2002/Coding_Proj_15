import React from 'react';
import './Experience.css';

const Experience = ({ title, company, duration }) => {
  return (
    <div className="experience">
      <h3 className="experience-title">{title}</h3>
      <p className="experience-company">{company}</p>
      <p className="experience-duration">{duration}</p>
    </div>
  );
};

export default Experience;
