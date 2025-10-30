import { useContext } from 'react';
import { FormElementContext, TFormElementContext } from '.';
import cn from '../../utils/cn';
import Button from '../ui/Button';

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext) as TFormElementContext;

  return (
    <div
      className={cn('grid grid-cols-1 gap-5 justify-items-center my-8', {
        'md:grid-cols-2': double,
      })}
    >
      <div className="flex justify-end w-full max-w-md col-start-1 md:col-start-2">
        <Button className="w-full md:w-fit">Submit</Button>
      </div>
    </div>
  );
};
