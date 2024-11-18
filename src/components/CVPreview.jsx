import React from 'react';

export default function CVPreview({ generalInfo, education, experienceList, skillList }) {
  return (
    <div>
      <h2>Preview</h2>
      <h1>General Information</h1>
      <p><strong>Name:</strong> {generalInfo.name || 'N/A'}</p>
      <p><strong>Email:</strong> {generalInfo.email || 'N/A'}</p>
      <p><strong>Phone:</strong> {generalInfo.phone || 'N/A'}</p>
      <p><strong>Location:</strong> {generalInfo.location || 'N/A'}</p>

      <h1>Education</h1>
      <p><strong>College Name:</strong> {education.collegeName || 'N/A'}</p>
      <p><strong>Major:</strong> {education.major || 'N/A'}</p>
      <p><strong>Start Date:</strong> {education.startDate || 'N/A'}</p>
      <p><strong>End Date:</strong> {education.endDate || 'N/A'}</p>

      <h1>Experience</h1>
      {experienceList.length > 0 ? (
        <ul>
          {experienceList.map((item, index) => (
            <li key={index}>
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p><strong>Start Date:</strong> {item.startDate}</p>
              <p><strong>End Date:</strong> {item.endDate}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No experience added yet.</p>
      )}

      <h1>Skills</h1>
      {skillList.length > 0 ? (
        <ul>
          {skillList.map((item, index) => (
            <li key={index}>
              <p><strong>Description:</strong> {item.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No skill added yet.</p>
      )}
    </div>
  );
}
