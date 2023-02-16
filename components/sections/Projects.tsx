import Image from 'next/image';

export const Projects = () => {
  return (
    <section className='container mx-auto flex flex-col justify-center items-center xl:items-start mb-16 xl:mb-12'>
      <h2 className='font-bold text-center text-3xl md:text-4xl mx-5 xl:text-start xl:mx-14'>
        Some Projects {"I've"} Build
      </h2>
      <p className='text-center text- mx-6 mt-2 lg:text-lg mb-16 xl:mx-14'>
        These are the projects I have built in my learning path as a Frontend Developer
      </p>

      <div className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-0 xl:gap-0 mb-16 mx-8 lg:mx-12 xl:mx-14'>
        <Image
          src='/projects/teslo.png'
          alt='Project Image'
          width={600}
          height={400}
          className='shadow-xl rounded-md md:w-[600px] md:h-[350px] lg:w-[450px] lg:h-[300px] xl:w-[600px] xl:h-[350px]'
        />

        <div className='mt-3 md:mx-12'>
          <h4 className='font-bold text-lg text-right'>Featured Project</h4>
          <h3 className='font-bold text-2xl text-right'>Teslo eCommerce</h3>

          <div className='bg-black rounded-md py-5 pr-4 pl-3 my-3'>
            <p className='text-base text-white text-right '>
              Clone of the Teslo shop, where we have user authentication, shopping cart,
              administrative panel to create, edit or delete products, manage customers
              and see a summary of sales made.
            </p>
          </div>

          <div className='flex items center justify-between'>
            <div>Logos Technologies</div>

            <div>Logos Github</div>
          </div>
        </div>
      </div>
    </section>
  );
};
