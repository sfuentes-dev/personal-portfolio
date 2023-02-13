import Image from 'next/image';

import {
  UserIcon,
  CodeBracketIcon,
  FolderIcon,
  ChatBubbleOvalLeftIcon,
  MoonIcon,
  Bars3Icon,
} from '@heroicons/react/24/solid';

import { Navigation } from './';

interface Props {
  setIsOpen: Function;
}

export const Navbar = ({ setIsOpen }: Props) => {
  return (
    <nav className='flex items-center justify-between px-4 md:px-12 h-14 shadow'>
      <div className='flex items-center gap-4'>
        <Image width={100} height={150} src='/vercel.svg' alt='' />
        <button>
          <MoonIcon className='h-6 w-6' />
        </button>
      </div>

      <div className='md:flex items-center gap-8 hidden'>
        <Navigation href='#about' text='About' icon={<UserIcon className='h-6 w-6' />} />
        <Navigation
          href='/'
          text='Skills'
          icon={<CodeBracketIcon className='h-6 w-6' />}
        />
        <Navigation href='/' text='Projects' icon={<FolderIcon className='h-6 w-6' />} />
        <Navigation
          href='/'
          text='Connect'
          icon={<ChatBubbleOvalLeftIcon className='h-6 w-6' />}
        />
      </div>

      <button className='md:hidden h-9 w-9' onClick={() => setIsOpen(true)}>
        <Bars3Icon />
      </button>
    </nav>
  );
};
