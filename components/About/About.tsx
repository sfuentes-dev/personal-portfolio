import Image from 'next/image';

import { motion } from 'framer-motion';
import { TechnologiesList } from './';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='container mx-auto flex flex-col justify-center md:mb-24  xl:mb-0 text-[#888] xl:h-[calc(100vh_-_64px)]'
      id='about'
    >
      <div className='flex items-center justify-center flex-col mb-16 gap-5'>
        <span className='w-10 h-10 text-center text-black font-bold rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] text-lg inline-flex items-center justify-center'>
          1
        </span>
        <h2 className='font-bold text-center text-3xl md:text-4xl bg-gradient-to-tl from-[#FF4D4D] to-[#F9CB28] bg-clip-text text-transparent'>
          About Me.
        </h2>
        <span className='text-2xl lg:text-3xl font-bold text-black dark:text-white'>
          When the inspiration begins.
        </span>
      </div>

      <div className='container mx-auto flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-10'>
        <div className='bg-gradient-to-r from-[#FAFAFA] to-[#FFF] p-0.5 rounded-md my-4 hover:scale-105 transition-all ease-in-out duration-500 hover:from-[#FF4D4D] hover:to-[#F9CB28] shadow-2xl'>
          <Image
            width={350}
            height={350}
            alt='Profile Picture'
            src='/assets/me.jfif'
            className='w-60 h-auto lg:w-72 xl:w-[370px] rounded-md grayscale hover:grayscale-0 transition-all ease-in-out duration-500 shadow-2xl'
          />
        </div>

        <div className='mx-4 lg:ml-10 xl:w-1/2'>
          <p className='text-base md:text-lg text-center xl:text-left mx-6 lg:text-xl mt-5'>
            Hello there, my name is Sebastian and I&apos;m passionate about creating web
            applications. I&apos;m a Mechanical engineer but in 2021 I decide to pursue my
            dream of being a Frontend developer (maybe someday a Full Stack dev), so since
            then I&apos;ve been self-taught in everything relate to web technologies.
            Currently, I&apos;m learning Next JS and Node JS, while I&apos;m looking for
            that great first job as a developer.
          </p>

          <p className='text-base md:text-lg text-center  xl:text-left mx-6 lg:text-xl mt-5'>
            Mi main goal when writing code is to build beautiful applications, with
            intuitive interfaces taking into account the basics principles of UX/UI
            design, providing accessible and inclusive digital experiences for every user.
          </p>

          <p className='text-base md:text-lg text-center  xl:text-left mx-6 lg:text-xl mt-5'>
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <div className='mt-6'>
            <TechnologiesList />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
