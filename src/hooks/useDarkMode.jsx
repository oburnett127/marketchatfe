import React, { useEffect, useState } from 'react';

function useDarkMode() {
  const [theme, setTheme] = useState('light');
  const colorTheme = theme === 'light' ? 'dark' : 'light';

  //   TODO: Reference here and implement storing dark/light preference to localStorage https://tailwindcss.com/docs/dark-mode

  useEffect(() => {
    const root = window.document.documentElement;
    console.log(root);
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}

export default useDarkMode;
