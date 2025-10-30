import { motion, useCycle } from 'framer-motion';

const boxAnimation = [
  { x: 0, y: 0, opacity: 1 },
  { x: 100, y: 100, opacity: 0.8 },
  { x: -100, y: 100, opacity: 0.6 },
  { x: -100, y: -100, opacity: 0 },
];

const Lesson7 = () => {
  const [animate, cycleAnimate] = useCycle(...boxAnimation);

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-red-500 rounded-lg size-5/6 ">
      <motion.div
        className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
        animate={animate}
        onTap={() => cycleAnimate()}
      ></motion.div>
    </div>
  );
};

export default Lesson7;
