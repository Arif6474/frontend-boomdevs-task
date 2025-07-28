import React from 'react';
import { Search, Bell,  Download, Menu, MoreHorizontal, Calendar } from 'lucide-react';
import { Button } from '../common/Button';
// import { ThemeToggle } from '../ui/ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
  onFilterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onFilterClick }) => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors md:hidden"
          >
            <Menu size={20} />
          </button>
          
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
              Sales Overview
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Monitor all your content activity
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2">
            <Calendar size={16} className="text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">Month</span>
            <select className="bg-transparent text-sm text-gray-700 dark:text-gray-300 border-none outline-none">
              <option>01 March</option>
            </select>
            <span className="text-sm text-gray-500 dark:text-gray-400">to</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">30 March</span>
          </div>

          <div className="flex items-center gap-2">
            {/* <ThemeToggle /> */}
            
            <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
              <Search size={16} />
            </Button>
            
            <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
              <Bell size={16} />
            </Button>
            
            <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
              <MoreHorizontal size={16} />
            </Button>

            <div className="flex items-center gap-3 ml-4">
              <div className="hidden md:block text-right">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  Amiril Mu*
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  amir@gmail.example
                </div>
              </div>
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
            <MoreHorizontal size={16} />
          </Button>
          <span className="text-sm text-gray-600 dark:text-gray-400">Customize Widget</span>
        </div>

        <Button variant="primary" size="sm" icon={Download}>
          Download
        </Button>
      </div>
    </header>
  );
};