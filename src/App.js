import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import CVPreview from './components/CVPreview';
import Education from './components/Education';


export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  }  
);

const [education, setEducation] = useState({
  collegeName: '',
  major: '',
  startDate: '',
  endDate: '',
})

  return (
    <div>
      <h1>CV Maker</h1>
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
      <CVPreview generalInfo={generalInfo} education={education} />
    </div>
  );
}
