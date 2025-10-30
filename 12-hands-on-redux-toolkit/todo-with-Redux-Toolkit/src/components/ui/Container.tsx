import { ReactNode } from 'react';

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto h-screen px-5 xl:px-0">
      {children}
    </div>
  );
};

export default Container;
