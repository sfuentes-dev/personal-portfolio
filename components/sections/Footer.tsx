import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <footer className='flex justify-between items-center px-4 py-4 border-t-2 mt-12'>
      <p className=''>@2023 | Designed & coded with 💖 by Sebastian Fuentes</p>

      <div className='flex justify-center items-center gap-4'>
        <SocialIcon
          url='https://github.com/'
          bgColor='black'
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url='https://www.linkedin.com/'
          bgColor='black'
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url='https://www.instagram.com/'
          bgColor='black'
          style={{ height: 35, width: 35 }}
        />
        <SocialIcon
          url='https://fernando-herrera.com/#/studentdetail/sfuentes.dev@gmail.com'
          bgColor='black'
          style={{ height: 35, width: 35 }}
        />
      </div>
    </footer>
  );
};
