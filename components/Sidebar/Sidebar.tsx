import { socialMedia } from '@/data';
import { SidebarItem } from './';

export const Sidebar = () => {
  return (
    <aside className='fixed top-16 left-0 h-full dark:bg-black w-20 lg:flex flex-col items-center justify-end hidden z-50 bg-transparent'>
      <div className='mb-48 flex flex-col items-center justify-center gap-11'>
        {socialMedia.map((social, index) => (
          <SidebarItem key={social.href} href={social.href} icon={social.icon} />
        ))}
      </div>
    </aside>
  );
};
