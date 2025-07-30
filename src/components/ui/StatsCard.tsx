import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import dotsThree from '../../assets/dotsThree.svg';

interface StatsCardProps {
  title: string; 
  value?: number | string; 
  percentageChange?: number; 
  difference?: any; 
  beforeText?: string; 
  afterText?: string; 
  icon?: any; 
}


const isPositiveChange = (percentageChange?: number): boolean => {
  if (percentageChange === undefined) return false; 
  return percentageChange > 0; 
};

export const StatsCard: React.FC<StatsCardProps> = ({ icon, percentageChange, value, title, difference, beforeText, afterText }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl  shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-md">
      <div className='p-6'>
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
            <span className="text-xl font-bold text-secondary dark:text-white">
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

      </div>

      <p className="text-[13px] text-secondary dark:text-white bg-gray-100 dark:bg-gray-600 p-2 rounded-b-xl min-h-14">
        {beforeText} <span className="font-bold ">{difference}</span> {afterText}
      </p>
    </div>
  );
};
