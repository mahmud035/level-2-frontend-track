import macBook from '@/assets/images/mac-book.jpg';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 3 },
  animate: {
    y: 20,
    rotate: -35,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className="grid h-screen grid-cols-1 pt-16 lg:grid-cols-2 place-content-center">
        <motion.div
          className="-ml-2"
          variants={intro}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl font-bold lg:text-8xl text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry.</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="mt-10 max-w-[50ch] mb-5 text-lg text-dark-gray"
            variants={introChildren}
          >
            Welcome to{' '}
            <span className="font-semibold text-primary-foreground">
              iRepair,{' '}
            </span>
            your one-stop place for all kinds of
            <span className="font-semibold text-primary-foreground">
              {' '}
              Macbook repairs{' '}
            </span>
            and diagnostics.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="w-3/4 mx-auto mt-10 lg:-mr-2 lg:w-full"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img src={macBook} alt="" className="object-contain h-[90%]" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
