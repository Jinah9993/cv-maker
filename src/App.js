import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import CVPreview from './components/CVPreview';
import Education from './components/Education';
import Experience from './components/Experience';
import Skill from './components/Skill';
import './App.css';




export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

const [education, setEducation] = useState({
  collegeName: '',
  major: '',
  startDate: '',
  endDate: '',
});

const [experienceList, setExperienceList] = useState([]);

const [skillList, setSkillList] = useState([]);

  return (
    <div className="container">
      <div className="form-section">
        <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <Education education={education} setEducation={setEducation} />
        <Experience experienceList={experienceList} setExperienceList={setExperienceList} />
        <Skill skillList={skillList} setSkillList={setSkillList} />
      </div>
      <div className="preview-section">
        <CVPreview
          generalInfo={generalInfo}
          education={education}
          experienceList={experienceList}
          skillList={skillList}
        />
      </div>
    </div>
  );
}
