import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Lesson13 = () => {
  const [isVisible, setIsVisible] = useState(true);

  const box = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
      },
    },
    exit: {
      opacity: 0,
      y: 200,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-red-500 rounded-lg size-4/6 ">
      <AnimatePresence>
        <motion.button
          onClick={() => setIsVisible((prev) => !prev)}
          className="bg-green-400 px-3 py-2.5 rounded-md text-white font-semibold"
          layout
        >
          Toggle
        </motion.button>

        {isVisible && (
          <motion.div
            className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
            variants={box}
            initial="hidden"
            animate="visible"
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson13;
