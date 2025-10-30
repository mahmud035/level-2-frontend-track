import { motion } from 'framer-motion';

const initial = { rotate: 0 };
const animate = { rotate: 360 };
const transition = { type: 'spring', duration: 3 };

const Lesson1 = () => {
  return (
    <div>
      <motion.div
        className="bg-indigo-500 rounded-lg size-64"
        initial={initial}
        animate={animate}
        transition={transition}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
