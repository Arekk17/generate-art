import React from 'react';
import Image from 'next/image';
import HamburgerMenuIcon from '../SVG/HamburgerMenuIcon';
import CartIcon from '@/assets/carticon.svg'
import Person from '../SVG/Person';
import HeartIcon from '@/assets/heart.svg'

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <button>
          <HamburgerMenuIcon />
        </button>
      </div>
      <div className="flex items-center m-1 gap-1">
        <button><Image src={HeartIcon} alt='heart'/></button>
        <button ><Image src={CartIcon} alt='Cart'/></button>
        <button>
          <Person />
        </button>
      </div>
    </nav>
  );
};
