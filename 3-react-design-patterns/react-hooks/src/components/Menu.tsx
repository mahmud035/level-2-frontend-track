import { ReactNode, createContext, useContext } from 'react';

type TMenuContext = {
  theme: string;
};

type TMenuListProps = {
  children: ReactNode;
};

// Create Context API
const MenuContext = createContext<TMenuContext | null>(null);

export const MenuList = ({ children }: TMenuListProps) => {
  const value = {
    theme: 'dark',
  };

  return (
    // Provider Context Values using Provider
    <MenuContext.Provider value={value}>
      <ul>{children}</ul>
    </MenuContext.Provider>
  );
};

export const MenuItem = () => {
  // Consume Context Values
  const { theme } = useContext(MenuContext) as TMenuContext;
  console.log(theme);

  return <li className="text-2xl font-semibold">Menu Item: {theme}</li>;
};
