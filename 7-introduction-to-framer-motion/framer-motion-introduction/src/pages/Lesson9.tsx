import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const Lesson9 = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: -200 }],
      [scope.current, { x: 0 }],
    ]);
  }, [animate, scope]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-red-500 rounded-lg size-5/6 ">
      <div
        ref={scope}
        className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
      ></div>
    </div>
  );
};

export default Lesson9;
