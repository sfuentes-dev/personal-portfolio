import Image from 'next/image';

interface Props {
  name: string;
  path: string;
}

export const TechnologyCard = ({ name, path }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 w-40 xl:w-60 py-8 xl:text-gray-500 hover:text-black dark:hover:text-white xl:grayscale hover:grayscale-0 xl:hover:scale-110 ease-in-out duration-300'>
      <Image
        src={path}
        alt='logo'
        width={100}
        height={100}
        className='w-14 lg:w-20 h-auto'
      />
      <p className='text-lg lg:text-xl font-bold'>{name}</p>
    </div>
  );
};
