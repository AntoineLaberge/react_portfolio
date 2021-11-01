import React from 'react';
import '../css/resume.css';
import { useState } from 'react';
import BlueButton from '../components/customButton';

function Resume() {

    const [testText, setTestText] = useState("Resume");
  
    const changeText = (text: string) => setTestText(text);
  
    return (
      <div className="App">
        <BlueButton text="Test" onClick={()=>{changeText("Hello, Antoine")}}/>
        <p>{testText}</p>
      </div>
    );
  }
  
  export default Resume;