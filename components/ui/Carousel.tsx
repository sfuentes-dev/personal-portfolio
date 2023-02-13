import Image from 'next/image';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export const Carousel = () => {
  return (
    <div className='flex justify-center items-center'>
      <button className='font-black text-4xl'>
        <ChevronLeftIcon className='w-10 h-10' />
      </button>

      <div className='container mx-auto grid grid-cols-4 ml-20'>
        <div className='w-64 h-64 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-center items-center'>
          <Image src='/logos/react.svg' alt='Skill Image' width={100} height={100} />
          <p className='mt-3 font-medium text-2xl text-black '>React JS</p>
        </div>

        <div className='w-64 h-64 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-center items-center'>
          <Image src='/logos/next.svg' alt='Skill Image' width={100} height={100} />
        </div>

        <div className='w-64 h-64 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-center items-center'>
          <Image src='/logos/javascript.svg' alt='Skill Image' width={100} height={100} />
          <p className='mt-3 font-medium text-2xl text-black '>JavaScript</p>
        </div>

        <div className='w-64 h-64 bg-white border border-gray-200 rounded-lg shadow-lg flex flex-col justify-center items-center'>
          <Image src='/logos/typescript.svg' alt='Skill Image' width={100} height={100} />
          <p className='mt-3 font-medium text-2xl text-black '>TypeScript</p>
        </div>
      </div>

      <button className='font-black text-4xl'>
        <ChevronRightIcon className='w-10 h-10' />
      </button>
    </div>
  );
};
