// IMPORTANT: MUST_Read: https://react.dev/learn/you-might-not-need-an-effect

import { useEffect, useState } from 'react';

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log('Render');

    return () => {
      console.log('Inside cleanup');
    };
  }, [hidden]);

  return (
    <div>
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-primary"
      >
        Click
      </button>
    </div>
  );
};

export default UseEffectExample;
