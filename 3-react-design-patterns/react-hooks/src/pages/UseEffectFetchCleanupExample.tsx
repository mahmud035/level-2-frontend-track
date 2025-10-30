import { useEffect, useState } from 'react';

const UseEffectFetchCleanupExample = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-primary"
      >
        {hidden ? 'Show' : 'Hide'}
      </button>

      {!hidden && <Todo />}
    </div>
  );
};

//* Todo Component
const Todo = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));

    return () => {
      controller.abort();
    };
  }, []);

  return <div className="p-10 border-2 border-red-400">Todo</div>;
};

export default UseEffectFetchCleanupExample;
