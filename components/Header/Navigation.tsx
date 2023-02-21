import Link from 'next/link';

interface Props {
  href: string;
  icon: JSX.Element;
  text: string;
}

export const Navigation = ({ href, icon, text }: Props) => {
  return (
    <div>
      <Link
        href={href}
        className='flex justify-center items-center gap-1 text-base text-[#888] hover:text-black dark:hover:text-white ease-in-out duration-300 transition-colors'
      >
        {icon}
        {text}
      </Link>
    </div>
  );
};
