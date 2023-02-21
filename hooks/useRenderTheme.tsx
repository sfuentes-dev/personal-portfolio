import { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';

import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs';

export const useRenderTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <BsFillSunFill
          className='h-6 w-6 text-[#888] hover:text-white ease-in-out duration-300 transition-colors hover:scale-105'
          role='button'
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <BsFillMoonStarsFill
          className='h-6 w-6 text-[#888] hover:text-black ease-in-out duration-300 transition-colors hover:scale-105'
          role='button'
          onClick={() => setTheme('dark')}
        />
      );
    }
  };

  return {
    renderThemeChanger,
  };
};
