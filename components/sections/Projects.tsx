import Image from 'next/image';

export const Projects = () => {
  return (
    <section className='container h-screen mx-auto flex flex-col justify-center'>
      <h2 className='ml-48 font-bold text-4xl mb-12'>Some Projects {"I've"} Build</h2>

      <div className='mx-48 flex justify-center items-center gap-4 mb-16'>
        <Image
          src='/projects/teslo.png'
          alt='Project Image'
          width={600}
          height={400}
          className='shadow-xl z-10'
        />

        <div>
          <h4 className='font-bold text-lg text-right'>Featured Project</h4>
          <h3 className='font-bold text-2xl text-right'>Teslo eCommerce</h3>

          <div className='bg-black rounded-md py-5 pr-4 pl-3 my-3'>
            <p className='text-lg text-white text-right '>
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

      <div className='mx-48 flex flex-row-reverse justify-center items-center gap-4'>
        <Image
          src='/projects/teslo.png'
          alt='Project Image'
          width={600}
          height={400}
          className='shadow-xl z-10'
        />

        <div>
          <h4 className='font-bold text-lg'>Featured Project</h4>
          <h3 className='font-bold text-2xl'>Teslo eCommerce</h3>

          <div className='bg-black rounded-md py-5 pr-4 pl-3 my-3'>
            <p className='text-lg text-white'>
              Clone of the Teslo shop, where we have user authentication, shopping cart,
              administrative panel to create, edit or delete products, manage customers
              and see a summary of sales made.
            </p>
          </div>

          <div className='flex flex-row-reverse items center justify-between'>
            <div>Logos Technologies</div>

            <div>Logos Github</div>
          </div>
        </div>
      </div>
    </section>
  );
};
