import React from 'react';
import '../css/coveat.css';
import BlueButton from '../components/customButton';

interface Props {
    history: any;
  }

const Coveat : React.FC<Props> = ({ 
    history
  }) => {
  
    const back = () => history.push('/');
  
    return (
      <div>
        <BlueButton text="Back" onClick={back}/>
      </div>
    );
  }
  
  export default Coveat;