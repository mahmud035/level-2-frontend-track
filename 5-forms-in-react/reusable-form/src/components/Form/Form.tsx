import { ReactNode, createContext } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import cn from '../../utils/cn';

export type TFormElementContext = {
  double: boolean;
};

export type TForm = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  double?: boolean;
};

export const FormElementContext = createContext<TFormElementContext | null>(
  null
);

export const Form = ({ children, onSubmit, double = true }: TForm) => {
  return (
    <FormElementContext.Provider value={{ double }}>
      <form
        onSubmit={onSubmit}
        className={cn(
          'w-full mt-4 p-5 mx-auto border border-gray-300 shadow-sm rounded-lg',
          {
            'max-w-5xl': double,
            'max-w-md': !double,
          }
        )}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
