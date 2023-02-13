import Link from 'next/link';

interface Props {
  href: string;
  icon: JSX.Element;
  text: string;
}

export const Navigation = ({ href, icon, text }: Props) => {
  return (
    <div>
      <Link href={href} className='flex justify-center items-center gap-1'>
        {icon}
        {text}
      </Link>
    </div>
  );
};
