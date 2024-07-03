import React from 'react';
import Skill from './Skill';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'HTML', level: 'Advanced' },
    // Add more skills as needed
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <Skill key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default Skills;
