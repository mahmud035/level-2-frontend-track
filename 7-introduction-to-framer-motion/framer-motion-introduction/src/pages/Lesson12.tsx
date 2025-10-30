/* eslint-disable no-irregular-whitespace */
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

const Lesson12 = () => {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (e) => {
    console.log('Progress =>', e);
  });

  return (
    <div className="flex flex-col min-h-[6000px] items-center justify-center gap-4 overflow-x-hidden">
      <div className="w-screen min-h-[6000px] bg-gray-500"></div>

      <motion.div
        className="h-3.5 w-full fixed top-0 left-0 right-0 bg-red-500 origin-[0%] rounded-lg"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
    </div>
  );
};

export default Lesson12;
