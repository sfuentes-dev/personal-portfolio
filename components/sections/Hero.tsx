import Link from 'next/link';

import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';

export const Hero = () => {
  return (
    <section
      className='container mx-auto flex lg:items-center lg:justify-center lg:h-2/3 xl:h-screen xl:mt-0 mt-16 lg:mt-32 mb-32 xl:mb-0'
      id='hero'
    >
      <div className='text-center flex flex-col items-center xl:justify-center xl:items-start'>
        <p className='text-base mb-1 lg:text-lg'>{`Hello There, I'm`}</p>

        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold'>
          Sebastian Fuentes,
        </h1>
        <h2 className='text-3xl w-80 md:text-4xl lg:text-5xl xl:text-7xl font-bold md:w-full xl:w-auto'>
          I love to create things for the web.
        </h2>
        <p className='text-base md:text-lg lg:text-xl lg:w-[800px] mt-5 mx-6 md:mx-12 lg:mx-auto xl:text-left xl:mx-0'>
          I&apos;m a software developer engineer based in Bogota Colombia, focused on
          create beautiful applications, with intuitive interfaces providing accessible
          and inclusive digital experiences for every user.
        </p>

        <div className='flex items-center gap-5 mt-6'>
          <button className='py-2.5 px-4 font-bold text-white bg-black rounded-md border-2'>
            <Link href='#'>Get in touche</Link>
          </button>

          <button className='flex border-2 border-black rounded-md py-2 px-4 font-bold gap-1'>
            Resume
            <ArrowDownTrayIcon className='w-6 h-6' />
          </button>
        </div>
      </div>
    </section>
  );
};
