import { useState } from 'react';

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 2000);
  };

  const handleDecrement = () => {
    // setCounter(counter - 1);
    // setCounter(counter - 1);
    // setCounter(counter - 1);

    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
    setCounter((prevCounter) => prevCounter - 1);
  };

  console.log('Render');

  return (
    <div>
      <h1 className="text-2xl font-semibold">{counter}</h1>

      <div className="flex gap-2">
        <button className="btn btn-success" onClick={handleIncrement}>
          Increment by 3
        </button>
        <button className="btn btn-success" onClick={handleAsyncIncrement}>
          Async Increment by 1
        </button>
        <button className="btn btn-warning" onClick={handleDecrement}>
          Decrement by 3
        </button>
        <button className="btn btn-error" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseStateExample;
