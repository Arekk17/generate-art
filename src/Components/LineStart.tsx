import React from 'react';

const ProgressBar: React.FC<any> = ({ activeStep }) => {
  const calculateWidth = (step: number) => {
    if (step === 1) {
      return '33.33%';
    } else if (step === 2) {
      return '50%';
    } else if (step === 3) {
      return '100%';
    }
    return '0%';
  };

  const renderDivider = (position: number) => {
    const leftPosition = position === 1 ? '33.33%' : position === 2 ? '66.66%' : '100%';
    const pixelPosition = position * (351 / 3) - 60;

    const stepTexts = ["Generate image", "Add details", "Review and save"];

    return (
      <div key={position} className="absolute h-4" style={{ left: `${pixelPosition}px` }}>
        <div
          className={`absolute bottom-0 transform -translate-x-1/2 w-6 h-6 flex items-center justify-center rounded-lg ${
            position === activeStep ? 'bg-red' : 'bg-gray-300'
          }`}
        >
          <span className={position === activeStep ? 'text-gray-300' : 'text-black'}>
            {position}
          </span>
        </div>
        <div className={`absolute text-xs text-center ${position === activeStep ? 'text-red' : 'text-gray-300' }`} style={{ top: '28px', left: '-20px' }}>
          {stepTexts[position - 1]}
        </div>
      </div>
    );
  };

  return (
    <div className="relative mx-auto h-1 w-full rounded-md bg-gray-300 " style={{ width: '351px' }}>
      <div
        className="absolute h-1 rounded-md bg-red"
        style={{ width: calculateWidth(activeStep) }}
      ></div>
      {renderDivider(1)}
      {renderDivider(2)}
      {renderDivider(3)}
    </div>
  );
};

export default ProgressBar;
