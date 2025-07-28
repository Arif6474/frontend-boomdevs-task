import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../.././../src/assets/air.svg'
import { ThemeToggle } from '../ui/ThemeToggle';
import {
  LayoutDashboard,
  User,
  Package,
  Users,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
  X,
  Zap
} from 'lucide-react';


interface SidebarProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/', subItems: [] },
  { icon: User, label: 'Profile', path: '/profile', subItems: [] },
  {
    icon: Package,
    label: 'Product',
    path: '/products',
    subItems: ['Smartwatch', 'Drone', 'Speaker', 'Chargers']
  },
  { icon: Users, label: 'Customers', path: '/customers', subItems: [] },
  { icon: MessageSquare, label: 'Message', path: '/messages', count: 20, subItems: [] }
];

const accountItems = [
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Help', path: '/help' },
  { icon: LogOut, label: 'Log Out', path: '/' }
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, isMobile, onClose }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#F9F9F9] dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700
        transform transition-transform duration-300 ease-in-out
        ${isMobile ? (isOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
        flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">

          <div className="flex items-center gap-2">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center">
              {/* <Zap size={20} className="text-white" /> */}
              <img src={Logo} alt="" />
            </div>
            <span className="text-xl font-bold text-secondary dark:text-white">Sales</span>
          </div>
          <div>
            <ThemeToggle />
          </div>
          {isMobile && (
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <div className="mb-6">
            <h3 className="px-3 text-xs  text-secondary/60 dark:text-gray-400 uppercase tracking-wider">
              General Menu
            </h3>
            <div className="mt-3 space-y-1 pl-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    onClick={isMobile ? onClose : undefined}
                    className={`
                      group flex items-center px-3 py-2 text-sm text-secondary rounded-lg transition-all duration-200
                      ${isActive(item.path)
                        ? 'bg-white shadow-md'
                        : 'text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                      }
                    `}
                  >
                    <item.icon size={18} className="mr-3 flex-shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    {item.count && (
                      <span className="ml-3 inline-block py-0.5 px-2 text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                        {item.count}
                      </span>
                    )}
                  </Link>

                  {/* Sub Items (for Product only) */}
                  {item.subItems && item.subItems.length > 0 && (
                    <div className="ml-9 mt-1 space-y-1">
                      {item.subItems.map((subItem) => {
                        const subPath = `${item.path}/${subItem.toLowerCase()}`;
                        const isSubActive = location.pathname === subPath;

                        return (
                          <Link
                            key={subItem}
                            to={subPath}
                            onClick={isMobile ? onClose : undefined}
                            className={`
                              block px-3 py-1 text-sm rounded-sm transition-colors
                              ${isSubActive
                                ? 'text-secondary font-medium'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}
                            `}
                          >
                            {subItem}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="px-3 text-xs text-secondary/60 dark:text-gray-400 uppercase tracking-wider">
              Account
            </h3>
            <div className="mt-3 space-y-1 pl-2">
              {accountItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={isMobile ? onClose : undefined}
                  className="group flex items-center px-3 py-2 text-sm  text-secondary dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-200"

                >
                  <item.icon size={18} className="mr-3 flex-shrink-0" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Upgrade Section */}
        <div className="p-4 m-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border border-blue-100 dark:border-gray-600">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-[#414FF4] rounded-lg flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                Activate Super
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Unlock All features on Gilsanium
              </p>
            </div>
          </div>
          <button className="w-full py-2 px-4 bg-[#414FF4] hover:bg-[#3542E8] text-white text-sm font-medium rounded-lg transition-colors">
            Upgrade
          </button>
        </div>
      </aside>
    </>
  );
};
