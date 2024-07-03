import React from 'react';
import Experience from './Experience';
import './Experiences.css';

const Experiences = () => {
  const experiences = [
    { title: 'Software Engineer', company: 'ABC Corp', duration: 'Jan 2020 - Present' },
    { title: 'Web Developer', company: 'XYZ Ltd', duration: 'Jun 2018 - Dec 2019' },
    { title: 'Intern', company: 'Tech Solutions', duration: 'Jan 2018 - May 2018' },
    // Add more experiences as needed
  ];

  return (
    <div className="experiences">
      <h2>Experience</h2>
      {experiences.map((experience, index) => (
        <Experience key={index} title={experience.title} company={experience.company} duration={experience.duration} />
      ))}
    </div>
  );
};

export default Experiences;
