import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import dotsThree from '../../assets/dotsThree.svg';

interface StatsCardProps {
  title: string; // Added title property
  value?: number | string; // Optional value property
  percentageChange?: number; // Optional earnings percentage change
  difference?: any; // Optional earnings difference
  beforeText?: string; // Optional before text
  afterText?: string; // Optional after text
  icon?: any; // Optional icon
}

// Helper function to determine if the percentage change is positive
const isPositiveChange = (percentageChange?: number): boolean => {
  if (percentageChange === undefined) return false; // Handle undefined case
  return percentageChange > 0; // Return true if percentageChange is positive
};

export const StatsCard: React.FC<StatsCardProps> = ({ icon, percentageChange, value, title, difference, beforeText, afterText }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className='flex items-center gap-1'>
          <div className=" bg-gray-50 p-1 rounded-lg dark:text-white">
            {icon}
          </div>
          <h3 className="text-sm font-medium text-secondary dark:text-gray-400">
            {title}
          </h3>
        </div>
        <div className="text-right">
          <img src={dotsThree} alt="options" />
        </div>
      </div>

      <div className="mb-2">

        <div className="flex items-end gap-3">
          <span className="text-2xl font-bold text-secondary dark:text-white">
            {value}
          </span>
          <span
            className={`text-sm font-medium flex items-center gap-1 ${isPositiveChange(percentageChange)
              ? 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-800 p-1 rounded'
              : 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-800 p-1 rounded'
              }`}
          >
            {percentageChange !== undefined && isPositiveChange(percentageChange)
              ? <TrendingUp size={14} />
              : <TrendingDown size={14} />}
            {percentageChange !== undefined && `${!isPositiveChange(percentageChange) ? String(Math.abs(percentageChange)) : percentageChange}%`}
          </span>
        </div>
      </div>

      <p className="text-sm text-secondary dark:text-white">
        {beforeText} <span className="font-bold ">{difference}</span> {afterText}
      </p>
    </div>
  );
};
