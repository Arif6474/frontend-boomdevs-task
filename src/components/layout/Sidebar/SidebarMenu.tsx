import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../../../config/sidebarItems';

interface SidebarMenuProps {
    isMobile: boolean;
    onClose: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ isMobile, onClose }) => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

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
                            onClick={isMobile ? onClose : undefined}
                            className={`
              group flex items-center px-3 py-2 text-sm text-secondary rounded-lg transition-all duration-200
              ${isActive(item.path) ? 'bg-white shadow-md' : 'text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}
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
    );
};

export default SidebarMenu;
