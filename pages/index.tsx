import Head from 'next/head';

import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Sidebar,
  Skills,
} from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sebastian Fuentes</title>
        <meta name='description' content='Sebastian Fuentes personal Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='flex gap-0'>
        <Sidebar />

        <main className='scroll scroll-smooth dark:bg-black flex-1'>
          <section id='hero' className='fadeIn'>
            <Hero />
          </section>

          <section id='about'>
            <About />
          </section>

          <section id='skills'>
            <Skills />
          </section>

          <section id='projects'>
            <Projects />
          </section>

          <section id='contact'>
            <Contact />
          </section>
        </main>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

{
  /* // TODO: Improve and fix  Drawer code */
}
{
  /* <Drawer isOpen={isOpen} setIsOpen={setIsOpen} /> */
}
