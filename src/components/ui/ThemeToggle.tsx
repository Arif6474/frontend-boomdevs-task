import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Button } from '../common/Button';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 p-0 bg-white shadow-sm"
    >
      {theme === 'light' ? (
        <Sun size={24} className='text-secondary' />
      ) : (

        <Moon size={24} className='text-secondary'/>
      )}
    </Button>
  );
};