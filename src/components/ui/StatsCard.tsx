import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import dotsThree from '../../assets/dotsThree.svg';

interface StatsCardProps {
  title: string; // Added title property
  value?: number; // Optional value property
  percentageChange?: number; // Optional earnings percentage change
  difference?: any; // Optional earnings difference
}

// Helper function to determine if the percentage change is positive
const isPositiveChange = (percentageChange?: number): boolean => {
  if (percentageChange === undefined) return false; // Handle undefined case
  return percentageChange > 0; // Return true if percentageChange is positive
};

export const StatsCard: React.FC<StatsCardProps> = ({ percentageChange, value, title, difference }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
          {/* You can add an icon here if necessary */}
        </div>
        <div className="text-right">
          <img src={dotsThree} alt="options" />
        </div>
      </div>

      <div className="mb-2">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
          {title}
        </h3>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </span>
          <span
            className={`text-sm font-medium flex items-center gap-1 ${isPositiveChange(percentageChange)
              ? 'text-green-600 dark:text-green-400'
              : 'text-red-600 dark:text-red-400'
              }`}
          >
            {percentageChange !== undefined && isPositiveChange(percentageChange)
              ? <TrendingUp size={14} />
              : <TrendingDown size={14} />}
            {percentageChange !== undefined && `${!isPositiveChange(percentageChange) ? String(Math.abs(percentageChange)) : percentageChange}%`}
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        {difference}
      </p>
    </div>
  );
};
