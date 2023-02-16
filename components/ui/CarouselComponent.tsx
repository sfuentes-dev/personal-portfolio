import Image from 'next/image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const CarouselComponent = () => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        centerMode={false}
        containerClass='flex items center cursor-pointer'
      >
        <div className='h-60 w-96 lg:w-[400px] flex flex-col justify-center items-center mx-auto gap-2'>
          <Image
            src='/logos/html.svg'
            alt='logo'
            width={80}
            height={80}
            className='w-28 h-28 md:mr-32'
          />
          <p className='text-center text-lg font-bold md:mr-32'>HTML5</p>
        </div>

        <div className='h-60 w-96 lg:w-[400px] flex flex-col justify-center items-center mx-auto gap-2'>
          <Image
            src='/logos/javascript.svg'
            alt='logo'
            width={80}
            height={80}
            className='w-28 h-28 md:mr-32 '
          />
          <p className='text-center text-lg font-bold md:mr-32'>JavaScript</p>
        </div>

        <div className='h-60 w-96 lg:w-[400px] flex flex-col justify-center items-center mx-auto gap-2'>
          <Image
            src='/logos/react.svg'
            alt='logo'
            width={80}
            height={80}
            className='w-28 h-28 md:mr-32 '
          />
          <p className='text-center text-lg font-bold md:mr-32'>React</p>
        </div>

        <div className='h-60 w-96 lg:w-[400px] flex flex-col justify-center items-center mx-auto gap-2'>
          <Image
            src='/logos/html.svg'
            alt='logo'
            width={80}
            height={80}
            className='w-28 h-28 md:mr-32 '
          />
          <p className='text-center text-lg font-bold md:mr-32'>HTML5</p>
        </div>

        <div className='h-60 w-96 lg:w-[400px] flex flex-col justify-center items-center mx-auto gap-2'>
          <Image
            src='/logos/javascript.svg'
            alt='logo'
            width={80}
            height={80}
            className='w-28 h-28 md:mr-32 '
          />
          <p className='text-center text-lg font-bold md:mr-32'>JavaScript</p>
        </div>

        <div className='h-60 w-96 lg:w-[400px] flex flex-col justify-center items-center mx-auto gap-2'>
          <Image
            src='/logos/react.svg'
            alt='logo'
            width={80}
            height={80}
            className='w-28 h-28 md:mr-32 '
          />
          <p className='text-center text-lg font-bold md:mr-32'>React</p>
        </div>
      </Carousel>
    </div>
  );
};
