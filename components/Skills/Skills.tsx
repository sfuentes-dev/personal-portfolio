import Link from 'next/link';
import { SkillsList } from './';
import { motion } from 'framer-motion';

export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='container mx-auto flex flex-col justify-center items-center xl:mt-48 xl:h-[calc(100vh_-_64px)] lg:mb-32 mb-24'
      id='#skills'
    >
      <div className='xl:mx-14'>
        <div className='pt-16 flex flex-col items-center justify-center gap-5 mx-11 md:mx-0'>
          <span className='w-10 h-10 text-center text-black font-bold rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] text-lg inline-flex items-center justify-center'>
            2
          </span>
          <h2 className='font-bold text-center xl:text-left text-3xl md:text-4xl bg-gradient-to-tl from-[#FF4D4D] to-[#F9CB28] bg-clip-text text-transparent pb-1'>
            My Toolbox & Things I Can Do.
          </h2>
          <span className='text-center lg:text-lg font-bold'>
            These are the technologies with which I can bring your project to life.
          </span>
        </div>

        <div className='mx-4 my-12'>
          <SkillsList />
        </div>
      </div>
    </motion.div>
  );
};
