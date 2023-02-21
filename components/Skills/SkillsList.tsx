import { technologies } from '@/data';
import { TechnologyCard } from './';

export const SkillsList = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-0 mx-6 overflow-x-hidden md:mx-auto items-center justify-center overflow-y-scroll h-96 xl:h-auto xl:overflow-hidden'>
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          name={technology.name}
          path={technology.path}
        />
      ))}
    </div>
  );
};
