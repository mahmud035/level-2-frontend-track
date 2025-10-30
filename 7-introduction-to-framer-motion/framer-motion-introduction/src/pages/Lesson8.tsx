import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Lesson8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log(isInView);

  return (
    <div className="flex flex-col min-h-[1800px] items-center justify-center gap-4 overflow-x-hidden">
      <div className="w-screen min-h-[1800px] bg-gray-500"></div>
      <div className="flex items-center justify-center gap-4 p-4 border-2 border-red-500 rounded-lg size-[600px]">
        <motion.div
          ref={ref}
          className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
          animate={
            isInView
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { ease: 'linear', duration: 1 },
                }
              : { opacity: 0, x: -800 }
          }
        ></motion.div>
      </div>
    </div>
  );
};

export default Lesson8;
