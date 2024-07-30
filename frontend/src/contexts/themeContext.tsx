import { createContext, useState } from 'react';
import { MantineThemeOverride } from '@mantine/core';

import darkTheme from '../themes/darkTheme.tsx';
import lightTheme from '../themes/lightTheme.tsx';

type ThemeContextType = {
  theme: MantineThemeOverride;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<MantineThemeOverride>(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === darkTheme ? lightTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; export { ThemeContext };

