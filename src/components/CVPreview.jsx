import React from 'react';

export default function CVPreview({ generalInfo, education }) {
  return (
    <div>
      <h2>Preview</h2>
      <h1>General Information</h1>
      <p><strong>Name:</strong> {generalInfo.name || 'N/A'}</p>
      <p><strong>Email:</strong> {generalInfo.email || 'N/A'}</p>
      <p><strong>Phone:</strong> {generalInfo.phone || 'N/A'}</p>

      <h1>Education</h1>
      <p><strong>College Name:</strong> {education.collegeName || 'N/A'}</p>
      <p><strong>Major:</strong> {education.major || 'N/A'}</p>
      <p><strong>Start Date:</strong> {education.startDate || 'N/A'}</p>
      <p><strong>End Date:</strong> {education.endDate || 'N/A'}</p>

    </div>
  );
  //need to work on calendar thing on date, see resume structure and use as template
}
