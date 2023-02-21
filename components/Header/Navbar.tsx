import { navItems } from '@/data';

import { Navigation } from './';
import { useRenderTheme } from '../../hooks/useRenderTheme';

import { HiMenuAlt2 } from 'react-icons/hi';
import Link from 'next/link';

interface Props {
  setIsOpen: Function;
}

export const Navbar = ({ setIsOpen }: Props) => {
  const { renderThemeChanger } = useRenderTheme();

  return (
    <nav className='flex items-center justify-between px-4 md:px-6 h-16 shadow-sm'>
      <div className='flex items-center justify-between gap-4'>
        <Link
          href='#hero'
          className='font-black text-2xl bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] bg-clip-text text-transparent'
        >
          SEB DEV
        </Link>

        {renderThemeChanger()}
      </div>

      <nav className='md:flex items-center gap-8 hidden'>
        {navItems.map(({ id, description, icon, href }) => (
          <Navigation key={id} href={href} text={description} icon={icon} />
        ))}
      </nav>

      <button className='md:hidden h-9 w-9' onClick={() => setIsOpen(true)}>
        <HiMenuAlt2 className='h-7 w-7' />
      </button>
    </nav>
  );
};
