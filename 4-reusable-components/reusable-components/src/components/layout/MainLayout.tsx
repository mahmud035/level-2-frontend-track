import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer';
import Navbar from '../../shared/Navbar';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
