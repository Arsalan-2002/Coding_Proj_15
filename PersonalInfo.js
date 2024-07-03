import React from 'react';
import './PersonalInfo.css'; // Import the CSS file for styling

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <h1>Your Name</h1>
      <p>Brief biography goes here. Talk about yourself, your interests, and what you do.</p>
      <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
    </div>
  );
};

export default PersonalInfo;
