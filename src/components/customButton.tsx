import React from "react";
import Button from 'react-bootstrap/Button';

interface Props {
    text: React.ReactNode;
    onClick: () => void;
  }
  
const BlueButton: React.FC<Props> = ({ 
      text,
      onClick
    }) => { 
    return (
      <Button 
        variant="outline-primary"
        style={{}}
        onClick={onClick}>
        {text}
        </Button>
    );
  }
  
  export default BlueButton;