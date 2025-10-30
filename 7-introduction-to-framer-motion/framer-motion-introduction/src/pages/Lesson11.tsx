/* eslint-disable no-irregular-whitespace */
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Lesson11 = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [0, 600], [1, 0]);
  // const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  // const rotate = useTransform(x, [-200, 200], [0, 180]);

  //* position 0 => opacity 1
  //* position 300 => opacity 0.5
  //* position 600 => opacity 0

  /* NOTE: We can use useTransform to create a new motion value called "opacity". By defining an input range and an output range we can say, "when x is 0, opacity should be 1. When x is 600, opacity should be 0. */

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-red-500 rounded-lg size-5/6 ">
      <motion.div
        className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
        style={{ x, opacity }}
        drag="x"
        dragSnapToOrigin={true}
      ></motion.div>
    </div>
  );
};

export default Lesson11;
