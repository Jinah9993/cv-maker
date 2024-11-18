import React, { useState, useRef } from 'react';
import GeneralInfo from './components/GeneralInfo';
import CVPreview from './components/CVPreview';
import Education from './components/Education';
import Experience from './components/Experience';
import Skill from './components/Skill';
import './App.css';
import html2pdf from 'html2pdf.js';

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
  
  const previewRef = useRef(); 

  
  const downloadPDF = () => {
    const element = previewRef.current; 
    const options = {
      margin: 0.5,
      filename: 'My_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };

    html2pdf().set(options).from(element).save();
  };

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
          ref={previewRef} 
          generalInfo={generalInfo}
          education={education}
          experienceList={experienceList}
          skillList={skillList}
        />
        <button className="download-button" onClick={downloadPDF}>
          Download as PDF
        </button>
      </div>
    </div>
  );
}
