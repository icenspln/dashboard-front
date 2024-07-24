// This componenet for the buttons that are inside the overlay windows


import React from 'react';

interface ConfirmButtonProps {
  text: string;        
  color?: string;      
  onClick?: () => void; 
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ text, color = 'bg-blue-500', onClick }) => {
  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded-full ${color} hover:bg-opacity-80 transition-colors duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ConfirmButton;
