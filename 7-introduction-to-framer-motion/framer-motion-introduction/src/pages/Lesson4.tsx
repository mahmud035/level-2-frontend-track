import { motion } from 'framer-motion';
import { useRef } from 'react';

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.6,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  tap: {
    scale: 1.1,
    boxShadow: '0px 10px 10px #000',
  },
};

const Lesson4 = () => {
  const parentRef = useRef(null);

  return (
    <motion.div
      ref={parentRef}
      className="flex items-center justify-center border-2 border-red-500 rounded-lg size-3/6"
    >
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 p-5 bg-indigo-500 rounded-lg size-64"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        drag
        dragConstraints={parentRef}
        dragSnapToOrigin={true}
        dragElastic={0.7}
        whileDrag="tap"
      ></motion.div>
    </motion.div>
  );
};

export default Lesson4;
