import Link from 'next/link';

import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export const Hero = () => {
  return (
    <section
      className='container mx-auto h-screen flex items-center justify-center'
      id='hero'
    >
      <div>
        <p className='text-base'>{`Hello There, I'm`}</p>

        <h1 className='text-7xl font-normal'>Sebastian Fuentes</h1>
        <h2 className='text-7xl font-bold'>I love to create things for the web.</h2>
        <p className='text-xl w-[800px] mt-5'>
          I&apos;m a software developer engineer based in Bogota Colombia, focused on
          create beautiful applications, with intuitive interfaces providing accessible
          and inclusive digital experiences for every user.
        </p>

        <div className='flex items-center gap-5 mt-6'>
          <button className='py-2.5 px-4 font-bold text-white bg-black rounded-md border-2'>
            <Link href='#'>Get in touche</Link>
          </button>

          <button className='flex border-2 border-black rounded-md py-2 px-4 font-bold'>
            Resume
            <ArrowDownTrayIcon className='w-6 h-6' />
          </button>
        </div>
      </div>
    </section>
  );
};
