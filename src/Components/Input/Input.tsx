'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import pen from '@/assets/pen.svg';

interface FormData {
  inputField: string;
}

export const FormComponent: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-screen-md mx-auto mb-2">
      <div className="flex items-center justify-center py-2 ml-5 mr-5">
        <div className="relative w-full">
          <input
            className="appearance-none bg-[#e9e6e66e] rounded-l py-1 px-2 h-12 w-full pl-12 leading-tight focus:outline-none focus:border-gray-600 shadow-md"
            type="text"
            placeholder="What do you want to create?"
            {...register('inputField', { required: 'This field is required' })}
            style={{ paddingRight: '4rem' }}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bg-[#CB2B28] hover:bg-red-700 text-white font-bold py-1 px-4 rounded-r h-12"
          >
            <Image src={pen} alt="pen" />
          </button>
        </div>
      </div>
      {errors.inputField && (
        <p className="text-red-500 text-xs italic">{errors.inputField.message}</p>
      )}
    </form>
  );
};