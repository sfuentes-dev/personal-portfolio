import { useState } from 'react';

import { Navbar } from './';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 dark:bg-transparent bg-opacity-20 backdrop-blur'>
      <Navbar setIsOpen={setIsOpen} />
    </header>
  );
};
