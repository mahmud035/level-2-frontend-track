import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

const Lesson6 = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((i) => ({
      x: 200,
      transition: { delay: i * 0.7, ease: 'linear' },
    }));
  }, [controls]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-red-500 rounded-lg size-5/6 ">
      <motion.div
        onMouseEnter={() => controls.stop()}
        className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
        animate={controls}
        custom={1}
      ></motion.div>
      <motion.div
        className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
        animate={controls}
        custom={2}
      ></motion.div>
      <motion.div
        className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
        animate={controls}
        custom={3}
      ></motion.div>
      <motion.div
        className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
        animate={controls}
        custom={4}
      ></motion.div>
    </div>
  );
};

export default Lesson6;
