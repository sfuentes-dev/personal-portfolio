import Link from 'next/link';
import { CarouselComponent } from '../ui/CarouselComponent';

export const Skills = () => {
  return (
    <section
      className='container mx-auto flex flex-col justify-center mb-32 xl:h-screen xl:mb-0'
      id='#skills'
    >
      <div className='xl:mx-14'>
        <div>
          <h2 className='font-bold text-center xl:text-left text-3xl md:text-4xl mx-7 xl:mx-0'>
            My Toolbox & Things I Can Do.
          </h2>
          <p className='text-center xl:text-left mx-6 xl:mx-0 mt-2 lg:text-lg'>
            These are the technologies with which I can bring your project to life
          </p>
        </div>

        <div className='mx-4 lg:ml-20 my-12'>
          <CarouselComponent />
        </div>

        <div>
          <h3 className='font-bold text-center xl:text-left text-2xl mb-2'>
            Currently working on:
          </h3>
          <p className='mx-6 xl:mx-0 text-center xl:text-left md:text-lg w:full'>
            Improving my skills in Next JS, Svelte and CSS, understanding the best
            practice and principles of JavaScript, TypeScript and React. Also, having fun
            with{' '}
            <Link href='https://www.frontendmentor.io/' className='font-bold'>
              Frontend Mentor
            </Link>{' '}
            challenges.
          </p>
        </div>
      </div>
    </section>
  );
};
