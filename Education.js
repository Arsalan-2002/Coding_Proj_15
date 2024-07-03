import React from 'react';
import './Education.css';

const Education = ({ institution, degree, years }) => {
  return (
    <div className="education">
      <h3 className="education-institution">{institution}</h3>
      <p className="education-degree">{degree}</p>
      <p className="education-years">{years}</p>
    </div>
  );
};

export default Education;
