import { Navigation } from './';

import {
  UserIcon,
  CodeBracketIcon,
  FolderIcon,
  ChatBubbleOvalLeftIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

interface Props {
  isOpen: boolean;
  setIsOpen: Function;
}

export const Drawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <aside
      className={
        ' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full  ')
      }
    >
      <section
        className={
          ' w-1/2 max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' +
          (isOpen ? ' translate-x-0 ' : ' translate-x-full ')
        }
      >
        <div className='flex justify-end items-end p-4'>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <XMarkIcon className='h-9 w-9' />
          </button>
        </div>

        <article className='relative pb-10 flex flex-col space-y-10 h-full items-center justify-center'>
          <Navigation href='/' text='About' icon={<UserIcon className='h-6 w-6' />} />
          <Navigation
            href='/'
            text='Skills'
            icon={<CodeBracketIcon className='h-6 w-6' />}
          />
          <Navigation
            href='/'
            text='Projects'
            icon={<FolderIcon className='h-6 w-6' />}
          />
          <Navigation
            href='/'
            text='Connect'
            icon={<ChatBubbleOvalLeftIcon className='h-6 w-6' />}
          />
        </article>
      </section>
      <section
        className=' w-screen h-full cursor-pointer '
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </aside>
  );
};
