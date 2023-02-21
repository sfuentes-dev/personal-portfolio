import { contact } from '@/data';
import { SocialMediaCard } from './';
import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='container mx-auto flex flex-col justify-center mb-24 xl:h-[calc(100vh_-_64px)]'
    >
      <div className='flex items-center justify-center flex-col mb-8 gap-5'>
        <span className='w-10 h-10 text-center text-black font-bold rounded-full bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] text-lg inline-flex items-center justify-center'>
          4
        </span>
        <h2 className='text-center text-3xl md:text-4xl font-bold bg-gradient-to-tl from-[#FF4D4D] to-[#F9CB28] bg-clip-text text-transparent'>
          Get in Touch.
        </h2>
        <p className='text-center font-bold text-lg'>
          Lets take a coffee and talk for our next project
        </p>
      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-stretch justify-between lg:justify-center mt-12 gap-24 lg:gap-8'>
        {/* Card */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {contact.map((contact) => (
            <SocialMediaCard
              key={contact.id}
              title={contact.title}
              subtitle={contact.subtitle}
              description={contact.description}
              icon={contact.icon}
              href={contact.href}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
