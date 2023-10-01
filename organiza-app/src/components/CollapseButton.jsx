import React, { useState } from 'react';
import { FiEye } from "react-icons/fi"

const ToggleButton = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  }

  return (
    <div>
        <a>Saldo </a>
      <button 
        className="btsaldo" 
        type="button" 
        onClick={handleClick}
      >
        <FiEye/>
      </button>
      {showText && (
        <div className="text-box">
          <p>saldo: </p>
        </div>
      )}
    </div>
  );
}

export default ToggleButton;

