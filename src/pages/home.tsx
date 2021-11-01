import React from 'react';
import '../css/home.css';
import { useState } from 'react';
import BlueButton from '../components/customButton';

function Home() {

    const [testText, setTestText] = useState("Home");
  
    const changeText = (text: string) => setTestText(text);
  
    return (
      <div className="App">
        <BlueButton text="Test" onClick={()=>{changeText("Hello, Antoine")}}/>
        <p>{testText}</p>
      </div>
    );
  }
  
  export default Home;