import Image from 'next/image';
import Link from 'next/link';

import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';

interface Props {
  title: string;
  description: string;
  technologies: ITechnologies[];
  imagePath: string;
  demoPath: string;
  githubPath: string;
  flexReverse: boolean;
}

interface ITechnologies {
  id: string;
  path: string;
}

export const FeaturedProject = ({
  title,
  description,
  technologies,
  imagePath,
  demoPath,
  githubPath,
  flexReverse,
}: Props) => {
  return (
    <div
      className={`${
        flexReverse ? 'lg:flex-row-reverse' : ''
      } flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-6 xl:gap-28 mb-20 mx-8 lg:mx-24 xl:mx-14`}
    >
      <Image
        src={imagePath}
        alt={title}
        width={600}
        height={400}
        className='shadow-xl dark:shadow-lg dark:shadow-white/30 rounded-md h-52 md:w-[600px] md:h-[350px] lg:w-[400px] lg:h-[250px] xl:w-[600px] xl:h-[350px] xl:grayscale xl:hover:grayscale-0 ease-in-out duration-300 xl:hover:scale-105'
      />

      <div className='mt-3'>
        <h4
          className={`font-bold text-lg text-[#888] ${
            flexReverse ? 'text-left' : 'text-right'
          }`}
        >
          Featured Project
        </h4>
        <h3 className={`font-bold text-2xl ${flexReverse ? 'text-left' : 'text-right'}`}>
          {title}
        </h3>

        <div className='bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] p-0.5 rounded-md my-4'>
          <div className='bg-[#FAFAFA] dark:bg-[#111] rounded-md py-5 pr-4 pl-3 shadow-xl'>
            <p
              className={`text-base text-[#888] font-semibold ${
                flexReverse ? 'text-left' : 'text-right'
              } `}
            >
              {description}
            </p>
          </div>
        </div>

        <div className='flex items center justify-between mt-6'>
          <div className='flex items-center justify-center gap-4'>
            {technologies.map((technology) => (
              <Image
                src={technology.path}
                alt={technology.id}
                key={technology.id}
                width={28}
                height={28}
              />
            ))}
          </div>

          <div className='flex justify-center items-center gap-3'>
            <Link
              href={githubPath}
              target='_blank'
              rel='noreferrer'
              passHref
              className='hover:text-[#F9CB28] ease-in-out duration-300 transition-colors'
            >
              <AiFillGithub size={'28px'} />
            </Link>
            <Link
              href={demoPath}
              target='_blank'
              rel='noreferrer'
              passHref
              className='hover:text-[#F9CB28] ease-in-out duration-300 transition-colors'
            >
              {/* <ArrowTopRightOnSquareIcon className='w-7 h-7 hover:scale-110 ease-in-out duration-300' /> */}
              <BsBoxArrowUpRight size={'24px'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
