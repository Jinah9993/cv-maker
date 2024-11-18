import React, { useState } from 'react';

export default function Skill({ skillList, setSkillList }) {
  const [description, setDescription] = useState('');

  const handleAddSkill = () => {
    const newSkill = {description};
    setSkillList([...skillList, newSkill]);
    setDescription('');
  };

  const handleRemoveSkill = (index) => {
    const updatedList = skillList.filter((_, i) => i !== index);
    setSkillList(updatedList);
  };

  return (
    <div>
      <h2>Skill</h2>
      <input
        type="text"
        placeholder="skill description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={handleAddSkill}>Add Skill</button>

      <ul>
        {skillList.map((item, index) => (
          <li key={index}>
            <p><strong>Description:</strong> {item.description}</p>
            <button onClick={() => handleRemoveSkill(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
