import React, { ReactNode, createContext, useState } from 'react';

export type TThemeContext = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

type TThemeProviderProps = {
  children: ReactNode;
};

//* Context API
export const ThemeContext = createContext<TThemeContext | null>(null);

const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [dark, setDark] = useState(false);

  const values = {
    dark,
    setDark,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
