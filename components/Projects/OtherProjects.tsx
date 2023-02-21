import { data } from '@/data/seed-data';
import { OtherProject } from './';

const { otherProjects } = data;

export const OtherProjects = () => {
  return (
    <article className='container mx-auto flex flex-col justify-center items-center'>
      <h2 className='text-center mx-10 md:mx-0 text-3xl font-bold mb-12'>
        Other Noteworthy Projects
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-x-6'>
        {otherProjects.map((project) => (
          <OtherProject
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            githubPath={project.githubPath}
            technologies={project.technologies}
            demoPath={project.demoPath}
          />
        ))}
      </div>
    </article>
  );
};
