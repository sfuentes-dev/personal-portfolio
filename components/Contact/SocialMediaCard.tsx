import Link from 'next/link';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
  href: string;
}

export const SocialMediaCard = ({ title, subtitle, description, icon, href }: Props) => {
  return (
    <div className='bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] p-0.5 rounded-md shadow-md'>
      <div className=' bg-[#fafafa] dark:bg-[#111] rounded-md h-full'>
        <div className='py-8 px-12 flex flex-col items-center justify-center'>
          {icon}
          <p className='text-lg font-black mt-6'>{title}</p>
          <p className='text-base mt-3 text-[#888]'>{subtitle}</p>
          <Link
            href={href}
            target='_blank'
            rel='noreferrer'
            className='text-base font-bold mt-6 hover:scale-110 hover:bg-gradient-to-r hover:from-[#FF4D4D] hover:to-[#F9CB28] hover:bg-clip-text hover:text-transparent transition-all duration-300 ease-out'
          >
            {description}
          </Link>
        </div>
      </div>
    </div>
  );
};
