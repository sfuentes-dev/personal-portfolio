import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { Map } from '../ui/Map';

export const Contact = () => {
  return (
    <>
      <section className='container mx-auto h-screen flex flex-col justify-center'>
        <div className='mx-48'>
          <h2 className='text-4xl font-bold'>Get in Touch.</h2>
          <p className='text-lg'>Lets take a coffee and talk for our next project</p>

          <div className='flex items-center justify-between mt-12 gap-32'>
            <form className='flex flex-col gap-6  w-1/2'>
              <input
                type='text'
                placeholder='Your Name'
                className='border rounded-md px-6 py-3'
              />
              <input
                type='email'
                placeholder='Your Email'
                className='border rounded-md px-6 py-3'
              />
              <textarea
                placeholder='Write a Message'
                className='border rounded-md px-6 py-3'
                rows={8}
              />

              <button
                type='submit'
                className='border bg-black text-white rounded-md py-3 w-1/2'
              >
                Send Message
              </button>
            </form>

            {/* Card */}
            <div className='grid grid-cols-2 gap-4  w-1/2'>
              <div className='bg-slate-100 rounded-lg shadow-md'>
                <div className='py-6 px-12 flex flex-col items-center gap-4'>
                  <SocialIcon url='https://web.whatsapp.com/' />
                  <p className='text-base font-black'>WhatsApp</p>
                  <p className='text-base'>+57 316 627 2927</p>
                  <Link href='#' className='text-sm font-black'>
                    Send a Message
                  </Link>
                </div>
              </div>

              <div className='bg-slate-100 rounded-lg shadow-md'>
                <div className='py-6 px-12 flex flex-col items-center gap-4'>
                  <SocialIcon url='https://mail.google.com/mail/u/0//' />
                  <p className='text-base font-black'>Phone</p>
                  <p className='text-base'>+57 316 627 2927</p>
                  <Link href='#' className='text-sm font-black'>
                    Lets Talk
                  </Link>
                </div>
              </div>

              <div className='bg-slate-100 rounded-lg shadow-md'>
                <div className='py-6 px-12 flex flex-col items-center gap-4'>
                  <SocialIcon url='https://telegram.org/' />
                  <p className='text-base font-black'>WhatsApp</p>
                  <p className='text-base'>+57 316 627 2927</p>
                  <Link href='#' className='text-sm font-black'>
                    Send a Message
                  </Link>
                </div>
              </div>

              <div className='bg-slate-100 rounded-lg shadow-md'>
                <div className='py-6 px-12 flex flex-col items-center gap-4'>
                  <SocialIcon url='https://web.whatsapp.com/' />
                  <p className='text-base font-black'>WhatsApp</p>
                  <p className='text-base'>+57 316 627 2927</p>
                  <Link href='#' className='text-sm font-black'>
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Map />
    </>
  );
};