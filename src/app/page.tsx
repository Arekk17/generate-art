import { GrayRectangle } from '@/Components/Cartoon/Cartoon';
import { Category }from '@/Components/Category/Category';
import { FormComponent } from '@/Components/Input/Input';
import { Inspirated } from '@/Components/Inspirated/Inspirated';
import { ProgressBar } from '@/Components/LineStart/LineStart';
import { LogoWithText } from '@/Components/Logo/Logo';
import { Navbar}  from '@/Components/Navigation/Navigation';
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col align-center justify-center ">
      <Navbar />
      <div className='mb-10 mr-5 ml-5'>
        <LogoWithText />
      </div>
      <div className='mb-20'>
        <ProgressBar activeStep={1} />
      </div>
      <div className='mb-10'>
        <FormComponent />
        <Category />
      </div>
      <div className='mb-10 flex align-center'>
        <GrayRectangle/>
      </div>
      <div className='mb-10'>
        <Inspirated />
      </div>
    </div>
  );
};

export default Home;
