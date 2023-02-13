import Image from 'next/image';
import { TechnologiesList } from '../ui';

export const About = () => {
  return (
    <section
      className='container h-screen mx-auto flex flex-col justify-center'
      id='about'
    >
      <h2 className='ml-48 font-bold text-4xl mb-12'>About Me.</h2>

      <div className='container mx-auto flex items-center justify-center gap-28'>
        <Image width={350} height={350} alt='Profile Picture' src='/me.png' />

        <div className='w-1/2'>
          <p className='text-xl mt-5'>
            Hello there, my name is Sebastian and I&apos;m passionate about creating web
            applications. I&apos;m a Mechanical engineer but in 2021 I decide to pursue my
            dream of being a Frontend developer (maybe someday a Full Stack dev), so since
            then I&apos;ve been self-taught in everything relate to web technologies.
            Currently, I&apos;m learning Next JS and Node JS, while I&apos;m looking for
            that great first job as a developer.
          </p>

          <p className='text-xl mt-5'>
            Mi main goal when writing code is to build beautiful applications, with
            intuitive interfaces taking into account the basics principles of UX/UI
            design, providing accessible and inclusive digital experiences for every user.
          </p>

          <p className='text-xl mt-5'>
            Here are a few technologies I&apos;ve been working with recently:
          </p>

          <div className='mt-6'>
            <TechnologiesList />
          </div>
        </div>
      </div>
    </section>
  );
};
