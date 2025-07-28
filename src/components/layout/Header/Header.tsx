import { useState } from 'react';
import HeaderLeftContent from './HeaderLeftContent';
import HeaderRightContent from './HeaderRightContent';

interface HeaderProps {
  onMenuClick: () => void;
  onFilterClick: () => void;
}

export function Header({ onMenuClick, onFilterClick }: HeaderProps) {

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="bg-[#ffffff] dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <HeaderLeftContent onMenuClick={onMenuClick} />
        <HeaderRightContent isSearchVisible={isSearchVisible} toggleSearchVisibility={toggleSearchVisibility} />
      </div>
    </header>
  );
}
