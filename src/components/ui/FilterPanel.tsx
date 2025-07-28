import React, { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import { Button } from '../common/Button';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterPanel: React.FC<FilterPanelProps> = ({ isOpen, onClose }) => {
  const [dateFrom, setDateFrom] = useState('09-10-2025');
  const [dateTo, setDateTo] = useState('09-11-2025');
  const [sortBy, setSortBy] = useState('Low to High (Lowest First)');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      <div className="absolute inset-0 bg-black bg-opacity-25 lg:hidden" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl lg:shadow-sm lg:border lg:border-gray-200 lg:dark:border-gray-700 lg:rounded-xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Filter by:
            </h3>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-6">
            {/* Date Range */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Date Range</h4>
                <button className="text-sm text-[#414FF4] hover:text-[#3542E8] font-medium">
                  Reset
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">From</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={dateFrom}
                      onChange={(e) => setDateFrom(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#414FF4]"
                    />
                    <Calendar size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">To</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={dateTo}
                      onChange={(e) => setDateTo(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#414FF4]"
                    />
                    <Calendar size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  Today
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  This Week
                </button>
                <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  This Month
                </button>
              </div>
            </div>

            {/* Amount */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Amount</h4>
                <button className="text-sm text-[#414FF4] hover:text-[#3542E8] font-medium">
                  Reset
                </button>
              </div>
              
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#414FF4]"
              >
                <option>Low to High (Lowest First)</option>
                <option>High to Low (Highest First)</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Price Range</h4>
                <button className="text-sm text-[#414FF4] hover:text-[#3542E8] font-medium">
                  Reset
                </button>
              </div>
              
              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  defaultValue="2500"
                  className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: 'linear-gradient(to right, #414FF4 0%, #414FF4 50%, #e5e7eb 50%, #e5e7eb 100%)'
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span>$0</span>
                  <span>$5000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => {
                setDateFrom('09-10-2025');
                setDateTo('09-11-2025');
                setSortBy('Low to High (Lowest First)');
              }}
            >
              Reset All
            </Button>
            <Button variant="primary" className="flex-1">
              Apply Filters(3)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};