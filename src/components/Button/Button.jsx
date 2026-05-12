import React from "react";
import { useNavigate } from "react-router-dom";
import './Button.css';

const Button = ({ text = "button", path = "/", color="blue" }) => {
  const navigate = useNavigate();
  
    return (
    <button
      className="custom-button"
      style={{ backgroundColor: color }}
      onClick={() => navigate(path)}
    >
      {text}
    </button>
  );
};

export default Button;