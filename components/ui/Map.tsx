import Link from 'next/link';

export const Map = () => {
  return (
    <div className="bg-[url('/map.png')] bg-no-repeat bg-center / bg-cover min-h-[400px] grayscale">
      <div className='container relative min-h-[400px]'>
        <div className=' text-white bg-black absolute p-3 left-[10%] bottom-[10%] rounded-xl shadow-md w-1/2  max-w-xs text-right lg:text-left'>
          <h3>Here is me!</h3>
          <p className='font-bold'>Bogota DC, Colombia</p>
          <Link
            href='https://goo.gl/maps/SQinwrHnVkshmHF66'
            target='_blank'
            rel='noreferrer'
            className='font-semibold'
          >
            Open in Google Maps
          </Link>
        </div>
      </div>
    </div>
  );
};
