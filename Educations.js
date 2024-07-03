import React from 'react';
import Education from './Education';
import './Educations.css';

const Educations = () => {
  const educations = [
    { institution: 'University A', degree: 'B.Sc. in Computer Science', years: '2016 - 2020' },
    { institution: 'College B', degree: 'A.A. in Information Technology', years: '2014 - 2016' },
    // Add more educational experiences as needed
  ];

  return (
    <div className="educations">
      <h2>Education</h2>
      {educations.map((education, index) => (
        <Education key={index} institution={education.institution} degree={education.degree} years={education.years} />
      ))}
    </div>
  );
};

export default Educations;
