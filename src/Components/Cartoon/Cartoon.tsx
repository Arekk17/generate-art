import React from 'react';
import Image from 'next/image';
import PadLock from '@/assets/padlock.svg';
import Scrolling from '@/assets/scrolling.svg';
import character from '@/assets/character.svg';
import { BackArrow } from '../SVG/BackArrow';
import { RedButton } from '../Button/RedButton';

export const GrayRectangle = () => {
  const handleButtonClick = () => {
    console.log('Clicked!');
  };
  return (
    <div className="bg-[#E3E4E7] flex ml-10">
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <div className="flex items-center mb-2">
            <div className='mt-4'>
                <BackArrow />
            </div>
          <p className="text-center ml-2">Style preview</p>
        </div>
        <Image src={character} alt='character' />
      </div>
      <div className="w-1/2 p-4 flex flex-col items-center justify-center">
        <p className="text-black mb-4">MINIMALISTIC</p>
        <div className='flex flex-row items-center'>
          <div className='mb-1 w-8'>
            <Image src={Scrolling} alt='scrolling'/>
          </div>
          <RedButton onClick={handleButtonClick()}>CARTOON</RedButton>
        </div>
        <div className='flex flex-row items-center'>
          <Image src={PadLock} alt='Padlock' width={18} height={18} /><span className="ml-2">ARTISTIC</span>
        </div>
      </div>
    </div>
  );
};
