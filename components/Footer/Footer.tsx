import { SidebarItem } from '../Sidebar';
import { socialMedia } from '@/data';
import { Map } from './Map';

export const Footer = () => {
  return (
    <footer>
      <Map />

      <div className='flex justify-between md:justify-between lg:justify-center items-center px-2 py-4 lg:ml-16 gap-3 z-0'>
        <p className='text-sm md:text-sm text-center '>
          @2023 | Designed & coded with 💖 by{' '}
          <span className='bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] bg-clip-text text-transparent font-bold'>
            Sebastian Fuentes
          </span>
        </p>

        <div className='flex items-center justify-between lg:justify-center gap-3 md:gap-7 lg:gap-7 lg:hidden'>
          {socialMedia.map((social, index) => (
            <SidebarItem key={social.href} href={social.href} icon={social.icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};
