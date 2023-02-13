import { CheckIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

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
    <div className='grid grid-cols-3 gap-2'>
      {technologies.map((technology) => (
        <div key={technology} className='flex items-center  gap-1.5'>
          <CodeBracketIcon className='w-5 h-5' />
          <p className='text-xl'>{technology}</p>
        </div>
      ))}
    </div>
  );
};
