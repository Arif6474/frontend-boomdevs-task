import React from 'react';
import { Link } from 'react-router-dom';
import { accountItems } from '../../../config/sidebarItems';

interface SidebarAccountProps {
    isMobile: boolean;
    onClose: () => void;
}

const SidebarAccount: React.FC<SidebarAccountProps> = ({ isMobile, onClose }) => {
    return (
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
                        className="group flex items-center px-3 py-2 text-sm text-secondary dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
                    >
                        <item.icon size={18} className="mr-3 flex-shrink-0" />
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SidebarAccount;
