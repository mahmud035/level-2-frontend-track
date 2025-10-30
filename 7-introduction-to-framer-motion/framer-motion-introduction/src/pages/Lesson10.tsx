import { motion, useDragControls } from 'framer-motion';

const Lesson10 = () => {
  const controls = useDragControls();

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 border-2 border-red-500 rounded-lg size-5/6 ">
      <div
        onPointerDown={(e) => controls.start(e)}
        className="flex flex-wrap w-64 h-10 gap-4 bg-green-500 rounded-lg"
      ></div>
      <motion.div
        className="flex flex-wrap gap-4 bg-indigo-500 rounded-lg size-64"
        drag="x"
        dragControls={controls}
      ></motion.div>
    </div>
  );
};

export default Lesson10;
