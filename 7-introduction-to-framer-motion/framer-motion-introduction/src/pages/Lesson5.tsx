import { motion } from 'framer-motion';

const parent = {
  hidden: { x: 0, y: 0, opacity: 0 },
  visible: {
    x: [0, 300, -300, 0],
    y: [0, 300, -300, 0],
    rotate: [0, 300, -300, 0],
    opacity: 1,
    transition: {
      ease: 'linear',
      duration: 4,
      repeat: Infinity,
      opacity: {
        duration: 0.5,
      },
    },
  },
};

const Lesson5 = () => {
  return (
    <motion.div className="flex items-center justify-center border-2 border-red-500 rounded-lg size-3/6 ">
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 p-5 bg-indigo-500 rounded-lg size-64"
        variants={parent}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </motion.div>
  );
};

export default Lesson5;
