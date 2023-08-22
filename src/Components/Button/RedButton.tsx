import React from 'react';
interface ButtonProps{
    children: any,
    onClick: any
}

export const RedButton:React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red text-white py-2 px-4 rounded-md hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-red-dark"
    >
      {children}
    </button>
  );
};