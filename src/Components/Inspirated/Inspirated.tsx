'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import getGeneratedColors from '@/api/ColormindAPI'
import { Modal } from '../Modal/ColorModal';
import { RedButton } from '../Button/RedButton';
import InspiratedImage from '@/public/inspirated.svg'

export const Inspirated = () => {
    const [generatedColors, setGeneratedColors] = useState<any[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleButtonClick = async () => {
      try {
        const colors = await getGeneratedColors();
        setGeneratedColors(colors);
        setIsModalOpen(true);
      } catch (error) {
        console.error('Error generating colors:', error);
      }
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-[#E3E4E742] p-6 rounded-lg shadow-md ml-3 mr-3 w-full">
        <h2 className="text-xl font-semibold mb-2 text-red text-center">Get Inspired!</h2>
        <h3 className="text-xl font-semibold mb-2 text-black text-center">BEST USERS DESIGNS</h3>
        <p className="text-gray-600 mb-2 text-center">See more</p>
        <div className='flex items-center justify-center'>
            <Image src={InspiratedImage} alt='inpirated image ' />
        </div>
        <div className="relative w-full mb-6">
          <div
            className="
              flex items-center justify-start
              appearance-none
              bg-gradient-to-t from-neutral-100 via-neutral-200 to-neutral-200 
              rounded-xl h-12 pl-8 leading-tight focus:outline-none 
            focus:border-gray-600 shadow-md"
          >punk heart, gothic</div>
          <div
            className="
            flex items-center
            absolute right-0 top-0 
            bg-gradient-to-t from-neutral-200 via-neutral-300 to-neutral-300 
            text-black  py-1 px-4 rounded-r h-12"
          >
            Inspirated
          </div>
        </div>
          <div className='flex items-center justify-center'>
            <RedButton onClick={handleButtonClick}>GENERATE</RedButton>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} colors={generatedColors} />
      </div>
    </div>
  );
};
