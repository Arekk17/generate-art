import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  colors: { r: number; g: number; b: number }[];
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, colors }) => {
  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-overlay absolute inset-0"
        onClick={handleClose}
      ></div>
      <div className="modal-content  w-full h-screen p-6 rounded-lg shadow-md">
        <div className="flex flex-col">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square mb-8"
              style={{
                backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
                width: '350px',
                height: '130px'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
