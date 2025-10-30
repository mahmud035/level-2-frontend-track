import useScrollGrow from '@/hooks/useScrollGrow';
import { motion } from 'framer-motion';

const DataRecovery = () => {
  const { componentRef, style } = useScrollGrow();

  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="h-[415px] col-span-12 md:col-span-6 lg:col-span-7 bg-red-500 rounded-lg"
    ></motion.div>
  );
};

export default DataRecovery;
