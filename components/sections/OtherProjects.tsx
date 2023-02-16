import {
  FolderOpenIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketSquareIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export const OtherProjects = () => {
  return (
    <section className='container mx-auto flex flex-col justify-center items-center mb-32'>
      <h2 className='text-center text-3xl font-bold mb-12 xl:text-left xl:self-start xl:mx-14'>
        Other Noteworthy Projects
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-x-6'>
        <div className='bg-slate-100 w-80 rounded-md shadow-md'>
          <div className='p-4'>
            <div className='flex items-center justify-between'>
              <FolderOpenIcon className='w-12 h-12' />

              <div className='flex items-center justify-center gap-1'>
                <Link href='#'>
                  <CodeBracketSquareIcon className='w-6 h-6' />
                </Link>

                <Link href='#'>
                  <ArrowTopRightOnSquareIcon className='w-6 h-6' />
                </Link>
              </div>
            </div>

            <h4 className='pt-6 font-semibold text-lg'>Project Title</h4>

            <p className='py-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, commodi?
              Iusto ullam, repellendus laborum accusamus placeat recusandae numquam
              tempore hic autem labore nesciunt.
            </p>

            <div className='flex items-center gap-4'>
              <Image
                width={30}
                height={30}
                alt='Technology Logo'
                src='/logos/react.svg'
              />
              <Image
                width={30}
                height={30}
                alt='Technology Logo'
                src='/logos/typescript.svg'
              />
              <Image width={30} height={30} alt='Technology Logo' src='/logos/next.svg' />
            </div>
          </div>
        </div>

        <div className='bg-slate-100 w-80 rounded-md shadow-md'>
          <div className='p-4'>
            <div className='flex items-center justify-between'>
              <FolderOpenIcon className='w-12 h-12' />

              <div className='flex items-center justify-center gap-1'>
                <Link href='#'>
                  <CodeBracketSquareIcon className='w-6 h-6' />
                </Link>

                <Link href='#'>
                  <ArrowTopRightOnSquareIcon className='w-6 h-6' />
                </Link>
              </div>
            </div>

            <h4 className='pt-6 font-semibold text-lg'>Project Title</h4>

            <p className='py-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, commodi?
              Iusto ullam, repellendus laborum accusamus placeat recusandae numquam
              tempore hic autem labore nesciunt.
            </p>

            <div className='flex items-center gap-4'>
              <Image
                width={30}
                height={30}
                alt='Technology Logo'
                src='/logos/react.svg'
              />
              <Image
                width={30}
                height={30}
                alt='Technology Logo'
                src='/logos/typescript.svg'
              />
              <Image width={30} height={30} alt='Technology Logo' src='/logos/next.svg' />
            </div>
          </div>
        </div>

        <div className='bg-slate-100 w-80 rounded-md shadow-md'>
          <div className='p-4'>
            <div className='flex items-center justify-between'>
              <FolderOpenIcon className='w-12 h-12' />

              <div className='flex items-center justify-center gap-1'>
                <Link href='#'>
                  <CodeBracketSquareIcon className='w-6 h-6' />
                </Link>

                <Link href='#'>
                  <ArrowTopRightOnSquareIcon className='w-6 h-6' />
                </Link>
              </div>
            </div>

            <h4 className='pt-6 font-semibold text-lg'>Project Title</h4>

            <p className='py-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, commodi?
              Iusto ullam, repellendus laborum accusamus placeat recusandae numquam
              tempore hic autem labore nesciunt.
            </p>

            <div className='flex items-center gap-4'>
              <Image
                width={30}
                height={30}
                alt='Technology Logo'
                src='/logos/react.svg'
              />
              <Image
                width={30}
                height={30}
                alt='Technology Logo'
                src='/logos/typescript.svg'
              />
              <Image width={30} height={30} alt='Technology Logo' src='/logos/next.svg' />
            </div>
          </div>
        </div>

        <div className='bg-slate-100 w-80 rounded-md shadow-md'>
          <div className='p-4'>
            <div className='flex items-center justify-between'>
              <FolderOpenIcon className='w-12 h-12' />

              <div className='flex items-center justify-center gap-1'>
                <Link href='#'>
                  <CodeBracketSquareIcon className='w-6 h-6' />
                </Link>

                <Link href='#'>
                  <ArrowTopRightOnSquareIcon className='w-6 h-6' />
                </Link>
              </div>
            </div>

            <h4 className='pt-6 font-semibold text-lg'>Project Title</h4>

            <p className='py-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, commodi?
              Iusto ullam, repellendus laborum accusamus placeat recusandae numquam
              tempore hic autem labore nesciunt.
            </p>

            <div className='flex items-center gap-4'>
              <Image
                width={30}
                height={30}
                alt='Technology Logo'
                src='/logos/react.svg'
              />
              <Image
                width={30}
                height={30}
                alt='Technology Logo'
                src='/logos/typescript.svg'
              />
              <Image width={30} height={30} alt='Technology Logo' src='/logos/next.svg' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
