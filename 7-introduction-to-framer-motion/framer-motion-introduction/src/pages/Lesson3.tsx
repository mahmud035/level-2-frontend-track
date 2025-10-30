import { motion } from 'framer-motion';

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1.5,
    },
  },
  hover: {
    scale: 1.5,
    transition: {
      duration: 0.5,
    },
  },
  tap: {
    scale: 0.5,
    rotate: 45,
    transition: {
      duration: 0.1,
    },
  },
};

const Lesson3 = () => {
  return (
    <div>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 p-5 bg-indigo-500 rounded-lg size-64"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => console.log('Hover start')}
        onHoverEnd={() => console.log('Hover end')}
      ></motion.div>
    </div>
  );
};

export default Lesson3;
