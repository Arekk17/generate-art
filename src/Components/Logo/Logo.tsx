import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.svg';

export const LogoWithText = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mt-6">
      <Image src={logo} alt="Logo" />
      <p className="text-xl font-semibold text-center">
        Generate your ART by typing in the field below any words that come to your mind!
      </p>
    </div>
  );
};

