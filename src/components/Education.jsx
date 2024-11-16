import React from 'react';

export default function Education({ education, setEducation }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  return (
    <div>
      <h2>Education</h2>
      <form>
        <label>
           College Name:
          <input
            type="text"
            name="collegeName"
            value={education.collegeName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Major:
          <input
            type="text"
            name="major"
            value={education.major}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={education.startDate}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={education.endDate}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}
