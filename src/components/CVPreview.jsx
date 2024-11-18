import React, { forwardRef } from 'react';
import '../styles/CVPreview.css';


const formatDate = (dateString) => {
  if (!dateString) return ''; 
  const options = { year: 'numeric', month: 'short' }; 
  return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
};

const CVPreview = forwardRef(({ generalInfo, education, experienceList, skillList }, ref) => {
  return (
    <div ref={ref} className="cv-preview-container">
      

      <div className="resume-header">
        <h1>{generalInfo.name || "Your Name"}</h1>
        <p>
          <span>{generalInfo.email || "your.email@example.com"}</span>
          <span> | </span>
          <span>{generalInfo.phone || "123-456-7890"}</span>
          <span> | </span>
          <span>{generalInfo.location || "Location"}</span>
        </p>
      </div>

      
      <div className="resume-section">
        <h2>Education</h2>
        <div>
          <p>
            <strong>{education.collegeName || "Your College Name"}</strong>
          </p>
          <p>
            {education.major && <span>{education.major}</span>}
          </p>
          <p>
            {education.startDate
              ? `${formatDate(education.startDate)} - ${
                  education.endDate ? formatDate(education.endDate) : "Present"
                }`
              : "Dates not provided"}
          </p>
        </div>
      </div>

      
      <div className="resume-section">
        <h2>Experience</h2>
        {experienceList.length > 0 ? (
          experienceList.map((exp, index) => (
            <div key={index} className="resume-experience-item">
              <p>
                <strong>{exp.title || "Job Title"}</strong>
              </p>
              <p>{exp.description || "Job Description"}</p>
              <p>
                {exp.startDate
                  ? `${formatDate(exp.startDate)} - ${
                      exp.endDate ? formatDate(exp.endDate) : "Present"
                    }`
                  : "Dates not provided"}
              </p>
            </div>
          ))
        ) : (
          <p>No experience added yet.</p>
        )}
      </div>

    
      <div className="resume-section">
        <h2>Skills</h2>
        <ul>
          {skillList.length > 0
            ? skillList.map((skill, index) => <li key={index}>{skill.description}</li>)
            : "No skills added yet."}
        </ul>
      </div>
    </div>
  );
});

export default CVPreview;
