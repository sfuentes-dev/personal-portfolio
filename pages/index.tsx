import { useState } from 'react';
import Head from 'next/head';

import { Drawer, Navbar } from '@/components/ui';
import { About, Hero, Skills } from '@/components/sections';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Sebastian Fuentes</title>
        <meta name='description' content='Sebastian Fuentes personal Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='sticky top-0 bg-white'>
        <Navbar setIsOpen={setIsOpen} />
      </header>

      <main>
        {/* // TODO: Improve and fix  Drawer code */}
        {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen} /> */}

        <Hero />

        <About />

        <Skills />
      </main>
    </>
  );
}
