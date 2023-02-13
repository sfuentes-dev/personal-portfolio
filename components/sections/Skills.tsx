import Link from 'next/link';
import React from 'react';
import { Carousel } from '../ui/Carousel';

export const Skills = () => {
  return (
    <section
      className='container mx-auto h-screen flex flex-col justify-center'
      id='#skills'
    >
      <div className='ml-48'>
        <h2 className='font-bold text-4xl'>My Toolbox & Things i Can Do.</h2>
        <p className='text-lg'>
          These are the technologies with which I can bring your project to life
        </p>
      </div>

      <div className='ml-20 my-12'>
        <Carousel />
      </div>

      <div className='ml-48'>
        <h3 className='font-bold text-2xl'>Currently working on:</h3>
        <p className='text-lg w-3/4'>
          Improving my skills in Next JS, Svelte and CSS, understanding the best practice
          and principles of JavaScript, TypeScript and React. Also, having fun with{' '}
          <Link href='https://www.frontendmentor.io/' className='font-bold'>
            Frontend Mentor
          </Link>{' '}
          challenges.
        </p>
      </div>
    </section>
  );
};
