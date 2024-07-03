import React from 'react';
import './Skill.css';

const Skill = ({ name, level }) => {
  return (
    <div className="skill">
      <span className="skill-name">{name}</span>
      <span className="skill-level">{level}</span>
    </div>
  );
};

export default Skill;
