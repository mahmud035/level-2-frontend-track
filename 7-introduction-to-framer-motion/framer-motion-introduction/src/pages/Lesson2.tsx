import { motion } from 'framer-motion';

const parent = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const child = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: { opacity: 1, scale: 1 },
};

const Lesson2 = () => {
  return (
    <div>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 p-5 bg-indigo-500 rounded-lg size-64"
        variants={parent}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="rounded bg-cyan-400 size-20"
          variants={child}
        ></motion.div>
        <motion.div
          className="rounded bg-cyan-400 size-20"
          variants={child}
        ></motion.div>
        <motion.div
          className="rounded bg-cyan-400 size-20"
          variants={child}
        ></motion.div>
        <motion.div
          className="rounded bg-cyan-400 size-20"
          variants={child}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lesson2;
