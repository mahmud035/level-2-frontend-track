import { ReactNode, useContext } from 'react';
import { FormElementContext, TFormElementContext } from '.';
import cn from '../../utils/cn';

export const FormSection = ({ children }: { children: ReactNode }) => {
  const { double } = useContext(FormElementContext) as TFormElementContext;

  return (
    <div
      className={cn('grid grid-cols-1 gap-5 justify-items-center', {
        'md:grid-cols-2': double,
      })}
    >
      {children}
    </div>
  );
};
