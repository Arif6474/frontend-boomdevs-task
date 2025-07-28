import React from 'react';
import { DollarSign, ShoppingBag, TrendingUp, Users, TrendingDown } from 'lucide-react';
import { StatCard as StatCardType } from '../../types';

interface StatsCardProps {
  data: StatCardType;
}

const iconMap = {
  dollarsign: DollarSign,
  shoppingbag: ShoppingBag,
  trendingup: TrendingUp,
  users: Users
};

export const StatsCard: React.FC<StatsCardProps> = ({ data }) => {
  const Icon = iconMap[data.icon as keyof typeof iconMap];
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <Icon size={20} className="text-gray-600 dark:text-gray-400" />
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
            {data.isPositive ? '↗' : '↘'}
          </div>
        </div>
      </div>
      
      <div className="mb-2">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
          {data.title}
        </h3>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {data.value}
          </span>
          <span className={`text-sm font-medium flex items-center gap-1 ${
            data.isPositive 
              ? 'text-green-600 dark:text-green-400' 
              : 'text-red-600 dark:text-red-400'
          }`}>
            {data.isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {data.change}
          </span>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {data.description}
      </p>
    </div>
  );
};