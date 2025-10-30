import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar />
      <div className="h-full col-span-10 px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
