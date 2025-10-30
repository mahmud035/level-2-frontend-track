import { cn } from '@/lib/utils';
import { LayoutDashboard } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sticky top-0 left-0 h-screen col-span-2 p-4 overflow-auto lg:p-5 bg-light-gray">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-2 p-3 font-medium transition-all rounded-md bg-gray hover:bg-dark-gray hover:text-white',
              {
                'bg-dark-gray text-white': isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-2 p-3 font-medium transition-all rounded-md bg-gray hover:bg-dark-gray hover:text-white',
              {
                'bg-dark-gray text-white': isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Add Service</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-2 p-3 font-medium transition-all rounded-md bg-gray hover:bg-dark-gray hover:text-white',
              {
                'bg-dark-gray text-white': isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0" />
          <span className="truncate">Service List</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
