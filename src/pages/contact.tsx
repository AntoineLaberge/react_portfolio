import React from 'react';
import '../css/contact.css';
import { useState } from 'react';
import BlueButton from '../components/customButton';

function Contact() {

    const [testText, setTestText] = useState("Contact");
  
    const changeText = (text: string) => setTestText(text);
  
    return (
      <div className="App">
        <BlueButton text="Test" onClick={()=>{changeText("Hello, Antoine")}}/>
        <p>{testText}</p>
      </div>
    );
  }
  
  export default Contact;