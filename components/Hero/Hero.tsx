import Link from 'next/link';

import { AiOutlineDownload } from 'react-icons/ai';

export const Hero = () => {
  return (
    <div className='container mx-auto flex lg:items-center lg:justify-center lg:h-2/3 xl:mt-0 mt-16 lg:mt-32 mb-32 xl:mb-0 text-[#888] xl:h-[calc(100vh_-_64px)]'>
      <div className='text-center flex flex-col items-center xl:justify-center xl:items-start xl:ml-12 2xl:ml-0'>
        <p className='text-base mb-1 lg:text-lg'>{`Hello There, I'm`}</p>

        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-black dark:text-white'>
          Sebastian Fuentes,
        </h1>
        <h2 className='text-3xl w-80 md:text-4xl lg:text-5xl xl:text-7xl  font-black md:w-full xl:w-auto bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] bg-clip-text text-transparent pb-6'>
          I love to create things for the web.
        </h2>
        <p className='text-base md:text-lg lg:text-xl lg:w-[800px] mt-5 xl:mt-0 mx-6 md:mx-12 lg:mx-auto xl:text-left xl:mx-0'>
          I&apos;m a software engineer based in Bogota Colombia, focused on create
          beautiful applications, with intuitive interfaces providing accessible and
          inclusive digital experiences for every user.
        </p>

        <div className='flex items-center gap-5 mt-6'>
          <button className='py-2 md:py-2.5 px-4 md:px-6 font-semibold text-white dark:text-black text-lg bg-black dark:bg-white rounded-md border-2 dark:hover:text-white hover:bg-white dark:hover:bg-black hover:text-black hover:border-black dark:hover:border-white transition-colors ease-in-out duration-300 shadow-2xl dark:shadow-white dark:shadow-none'>
            <Link href='#contact' passHref>
              Get in Touche
            </Link>
          </button>

          <div className='bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] p-0.5 rounded-md '>
            <button className='flex rounded-md py-2 px-4 md:py-2.5  md:px-6 font-semibold gap-1 text-black dark:text-white text-lg bg-white dark:bg-black hover:bg-gradient-to-r hover:from-[#FF4D4D] hover:to-[#F9CB28] hover:text-white dark:hover:text-black transition-colors duration-300 ease-in-out'>
              <Link
                href='/resume.pdf'
                passHref
                download
                className='flex justify-center items-center gap-1'
                target='_blank'
                rel='noreferrer'
              >
                Resume
                <AiOutlineDownload className='w-6 h-6' />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
