import { useEffect, useRef } from 'react';
import CustomInput from '../components/CustomInput';

const UseRefWithForwardRef = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  // IMPORTANT: Parent Component থেকে Child Component এ ref (reference) pass করতে চাইলে, Child Component কে forwardRef() দিয়ে wrap করে নিতে হবে।

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold">useRef with forwardRef</h1>
      <form>
        <CustomInput
          ref={inputRef}
          className={
            'p-2 border-2 border-green-500 rounded focus:outline-2 focus:outline-red-500'
          }
        />
      </form>
    </div>
  );
};

export default UseRefWithForwardRef;
