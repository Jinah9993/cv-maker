import React, { useState } from 'react';

export default function Experience({ experienceList, setExperienceList }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');


  const handleAddExperience = () => {
    const newExperience = { title, description, startDate,endDate };
    setExperienceList([...experienceList, newExperience]);
    setTitle('');
    setDescription('');
    setStartDate('');
    setEndDate('');
  };

  const handleRemoveExperience = (index) => {
    const updatedList = experienceList.filter((_, i) => i !== index);
    setExperienceList(updatedList);
  };

  return (
    <div>
      <h2>Experience</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Job Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <br />
        <button onClick={handleAddExperience}>Add Experience</button>

      <ul>
        {experienceList.map((item, index) => (
          <li key={index}>
            <p><strong>Title:</strong> {item.title}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <button onClick={() => handleRemoveExperience(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
