import Link from 'next/link';
import Image from 'next/image';

import { AiFillGithub } from 'react-icons/ai';
import { FaFolderOpen } from 'react-icons/fa';
import { BsBoxArrowUpRight } from 'react-icons/bs';

interface Props {
  id: string;
  title: string;
  description: string;
  technologies: {
    id: string;
    image: string;
  }[];
  githubPath: string;
  demoPath: string;
}

export const OtherProject = ({
  id,
  title,
  description,
  technologies,
  githubPath,
  demoPath,
}: Props) => {
  return (
    <div className='bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] p-0.5 rounded-md'>
      <div className='bg-[#FAFAFA] dark:bg-[#111] w-80 rounded-md shadow-md'>
        <div className='p-4'>
          <div className='flex items-center justify-between'>
            <FaFolderOpen className='w-12 h-12' />

            <div className='flex items-center justify-center gap-4'>
              <Link
                href={githubPath}
                target='_blank'
                rel='noreferrer'
                passHref
                className='hover:text-[#F9CB28] ease-in-out duration-300 transition-colors'
              >
                <AiFillGithub size={'28px'} />
              </Link>

              <Link href={demoPath} target='_blank' rel='noreferrer' passHref>
                <BsBoxArrowUpRight className='w-6 h-6 hover:text-[#F9CB28] ease-in-out duration-300 transition-colors' />
              </Link>
            </div>
          </div>

          <h4 className='pt-6 font-semibold text-xl'>{title}</h4>

          <p className='pt-4 pb-7 text-[#888]'>{description}</p>

          <div className='flex items-center gap-4'>
            {technologies.map((technology) => (
              <Image
                className='w-7 h-7'
                width={30}
                height={30}
                alt={technology.id}
                src={technology.image}
                key={technology.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
