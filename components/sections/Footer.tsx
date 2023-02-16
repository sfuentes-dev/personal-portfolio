import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <footer className='flex justify-center md:justify-around lg:justify-between items-center px-3 py-4 border-t-2 mt-12 gap-6'>
      <p className='text-sm md:text-base text-center'>
        @2023 | Designed & coded with 💖 by Sebastian Fuentes
      </p>

      <div className='flex justify-center items-center gap-2'>
        <SocialIcon
          url='https://github.com/'
          bgColor='black'
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url='https://www.linkedin.com/'
          bgColor='black'
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url='https://www.instagram.com/'
          bgColor='black'
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url='https://fernando-herrera.com/#/studentdetail/sfuentes.dev@gmail.com'
          bgColor='black'
          style={{ height: 30, width: 30 }}
        />
      </div>
    </footer>
  );
};
