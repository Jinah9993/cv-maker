import React from 'react';
import '../styles/CVPreview.css';


export default function CVPreview({ generalInfo, education, experienceList, skillList }) {
  
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>{generalInfo.name}</h1>
        <p>{generalInfo.email} | {generalInfo.phone} | {generalInfo.location}</p>
      </div>
      <div className="resume-section">
        <h2>Education</h2>
        {education.collegeName && (
          <p><strong>{education.collegeName}</strong>, {education.major} ({education.startDate} - {education.endDate})</p>
        )}
      </div>
      <div className="resume-section">
        <h2>Experience</h2>
        {experienceList.map((item, index) => (
          <div key={index} className="experience-item">
            <h3>{item.title}</h3>
            <p><strong>Duration:</strong> {item.startDate} - {item.endDate}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="resume-section">
        <h2>Skills</h2>
        <ul>
          {skillList.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
