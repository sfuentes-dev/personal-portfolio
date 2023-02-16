import { CodeBracketIcon } from '@heroicons/react/24/solid';

const technologies: string[] = [
  'TypeScript',
  'React',
  'JavaScript (ES6+)',
  'Next JS',
  'Node JS',
  'Svelte',
];

export const TechnologiesList = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-y-1 gap-x-0 xl:justify-start'>
      {technologies.map((technology) => (
        <div
          key={technology}
          className='flex items-center justify-center xl:justify-start xl:ml-6 gap-1.5'
        >
          <CodeBracketIcon className='w-4 h-4 md:w-5 md:h-5' />
          <p className='text-base md:text-lg lg:text-xl'>{technology}</p>
        </div>
      ))}
    </div>
  );
};
