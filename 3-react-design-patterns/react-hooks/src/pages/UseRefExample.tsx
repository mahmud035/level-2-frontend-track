import { useRef, useState } from 'react';

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  const increment = () => {
    myRef.current = myRef.current + 1;
    setCount(count + 1);

    console.log('State =>', count);
    console.log('Ref =>', myRef.current);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold">useRef</h1>
      <button
        onClick={() => increment()}
        className="text-xl font-semibold btn btn-primary"
      >
        {myRef.current}
      </button>
    </div>
  );
};

export default UseRefExample;
