import { useEffect, useState } from 'react';

const UseEffectCleanupExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-primary"
      >
        {hidden ? 'Show' : 'Hide'}
      </button>

      {!hidden && <Counter />}
    </div>
  );
};

//* Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);

  // IMPORTANT: useEffect with cleanup function
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Render');
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <h1 className="text-2xl font-semibold border-2 border-green-400 p-14">
      {count}
    </h1>
  );
};

export default UseEffectCleanupExample;
