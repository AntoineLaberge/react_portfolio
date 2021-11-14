import React from 'react';
import '../css/haiexpert.css';
import BlueButton from '../components/customButton';

interface Props {
    history: any;
  }

const Haiexpert : React.FC<Props> = ({ 
    history
  }) => {
  
    const back = () => history.push('/');
  
    return (
      <div>
        <BlueButton text="Back" onClick={back}/>
      </div>
    );
  }
  
  export default Haiexpert;