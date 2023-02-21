import Link from 'next/link';

interface Props {
  href: string;
  icon: JSX.Element;
}

export const SidebarItem = ({ href, icon }: Props) => {
  return (
    <Link href={href} passHref target='_blank' rel='noreferrer'>
      {icon}
    </Link>
  );
};
