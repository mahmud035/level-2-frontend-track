import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <motion.header
      className="fixed z-50 w-full h-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1,
      }}
    >
      <nav className="flex items-center justify-between w-full h-full max-w-[1250px] px-5 mx-auto font-medium">
        <span className="text-3xl">iRepair</span>
        <ul className="flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>Login</Button>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
