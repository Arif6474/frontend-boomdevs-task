import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { FilterPanel } from '../ui/FilterPanel';
import { useSidebar } from '../../hooks/useSidebar';
import Sidebar from './Sidebar/Sidebar';
import { Header } from './Header/Header';

export const Layout: React.FC = () => {
  const { isOpen, isMobile, toggleSidebar, closeSidebar } = useSidebar();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar
        isOpen={isOpen}
        isMobile={isMobile}
        onClose={closeSidebar}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          onMenuClick={toggleSidebar}
          onFilterClick={() => setIsFilterOpen(true)}
        />

        <main className="flex-1 overflow-auto relative">
          <Outlet />
          <FilterPanel
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
          />
        </main>
      </div>
    </div>
  );
};
