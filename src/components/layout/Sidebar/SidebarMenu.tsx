import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../../../config/sidebarItems';

interface SidebarMenuProps {
  isMobile: boolean;
  onClose: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isMobile, onClose }) => {
  const location = useLocation();
  
  const [openSubItem, setOpenSubItem] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  const toggleSubItem = (label: string) => {
    setOpenSubItem(openSubItem === label ? null : label);
  };

  return (
    <div>
      <h3 className="px-3 text-xs text-secondary/60 dark:text-gray-400 uppercase tracking-wider">
        General Menu
      </h3>
      <div className="mt-3 space-y-1 pl-2">
        {menuItems.map((item) => (
          <div key={item.label}>
            <Link
              to={item.path}
              onClick={() => {
                if (isMobile) {
                  onClose();
                }
                if (item.subItems) {
                  toggleSubItem(item.label);
                }
              }}  
              className={`
                group flex items-center px-3 py-2 text-sm text-secondary rounded-lg transition-all duration-200
                ${isActive(item.path)
                  ? 'bg-white shadow-md'
                  : 'text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}
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

            {/* Sub Items */}
            {item.subItems && item.subItems.length > 0 && (
              <div
                className={`ml-5 mt-1 space-y-1 pl-4 transition-all duration-300 ease-in-out
                ${openSubItem === item.label ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                `}
              >
                {item.subItems.map((subItem) => {
                  const subPath = `${item.path}/${subItem.toLowerCase()}`;
                  const isSubActive = location.pathname === subPath;

                  return (
                    <div key={subItem} className="flex items-center space-x-2">
                      <div className={`border-l-2 pl-3 ${isSubActive ? 'border-secondary dark:border-white' : 'dark:border-gray-700'}`}>
                        <Link
                          to={subPath}
                          onClick={isMobile ? onClose : undefined}
                          className={`
                            block text-sm transition-colors
                            ${isSubActive
                              ? 'text-secondary dark:text-white font-medium'
                              : 'text-secondary/60 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'}
                          `}
                        >
                          {subItem}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;
