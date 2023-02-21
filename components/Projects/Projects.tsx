import { FeaturedProject, OtherProjects } from './';

import { data } from '@/data/seed-data';
import { motion } from 'framer-motion';

export const Projects = () => {
  const { featuredProjects } = data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='container mx-auto flex flex-col justify-center items-center mb-32 lg:mb-40 xl:mb-12 2xl:mb-40 xl:pt-20 xl:h-[calc(100%_-_64px)]'
    >
      <div className='flex items-center justify-center flex-col lg:mb-16 gap-5'>
        <span className='w-10 h-10 text-center text-black font-bold rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] text-lg inline-flex items-center justify-center'>
          3
        </span>
        <h2 className='font-bold text-center text-3xl md:text-4xl mx-5 bg-gradient-to-tl from-[#FF4D4D] to-[#F9CB28] bg-clip-text text-transparent'>
          Some Projects {"I've"} Build
        </h2>
        <p className='text-center mx-6 mt-2 lg:text-lg mb-16 font-bold'>
          These are the projects I have built in my learning path as a Frontend Developer
        </p>
      </div>

      {featuredProjects.map((project) => (
        <FeaturedProject
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          imagePath={project.imagePath}
          demoPath={project.demoPath}
          githubPath={project.githubPath}
          flexReverse={project.flexReverse}
        />
      ))}

      <OtherProjects />
    </motion.div>
  );
};
