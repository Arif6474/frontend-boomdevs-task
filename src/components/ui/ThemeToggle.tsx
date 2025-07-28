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
      className="rounded-full w-8 h-8 p-0"
    >
      {theme === 'light' ? (
        <Moon size={16} />
      ) : (
        <Sun size={16} />
      )}
    </Button>
  );
};