import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/customButton.css"
import { Button } from "react-bootstrap";

interface Props {
    text: React.ReactNode;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
  }
  
const BlueButton: React.FC<Props> = ({ 
      text,
      onClick,
      className,
      style
    }) => { 
    return (
      <Button 
        variant="primary"
        onClick={onClick}
        className= {`rounded-pill ${className}`}
        style={style}>
        {text}
        </Button>
    );
  }
  
  export default BlueButton;