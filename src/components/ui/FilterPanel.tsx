import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../common/Button';

interface FilterPanelProps {
  isOpen: boolean;
  onClose: () => void;
  dateFrom: string;
  setDateFrom: React.Dispatch<React.SetStateAction<string>>;
  dateTo: string;
  setDateTo: React.Dispatch<React.SetStateAction<string>>;
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  priceRange: number;
  setPriceRange: React.Dispatch<React.SetStateAction<number>>;
}


const getTodayDate = (): string => {
  return formatDate(new Date());
};


const formatDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

const getRangeBackground = (value: number) => {
  const percent = (value / 5000) * 100;
  return `linear-gradient(to right, #414FF4 0%, #414FF4 ${percent}%, #e5e7eb ${percent}%, #e5e7eb 100%)`;
};



export const FilterPanel: React.FC<FilterPanelProps> = ({ isOpen, onClose, dateFrom, setDateFrom, dateTo, setDateTo, sortBy, setSortBy, priceRange, setPriceRange }) => {


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:relative lg:inset-auto">
      <div className="absolute inset-0 bg-black bg-opacity-25 lg:hidden" onClick={onClose}></div>

      <div className="absolute right-0 border top-8 h-full w-80 bg-white dark:bg-gray-800 shadow-xl lg:shadow-sm lg:border lg:border-gray-200 dark:lg:border-gray-700 lg:rounded-xl">
        <div className="p-6 bg-white shadow-xl dark:bg-gray-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-secondary dark:text-white">Filter by:</h3>
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
                <h4 className="font-medium text-secondary dark:text-white">Date Range</h4>
                <button
                  onClick={() => {
                    setDateFrom('');
                    setDateTo('');
                  }}
                  className="text-sm text-secondary hover:text-[#3542E8] font-medium"
                >
                  Reset
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">From</label>
                  <input
                    type="date"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-[#414FF4]"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 dark:text-gray-400 mb-1">To</label>
                  <input
                    type="date"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-[#414FF4]"
                  />
                </div>
              </div>

              {/* Preset Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const today = getTodayDate();
                    setDateFrom(today);
                    setDateTo(today);
                  }}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Today
                </button>
                <button
                  onClick={() => {
                    const today = new Date();
                    const past7 = new Date(today);
                    past7.setDate(today.getDate() - 6);
                    setDateFrom(formatDate(past7));
                    setDateTo(formatDate(today));
                  }}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  This Week
                </button>
                <button
                  onClick={() => {
                    const today = new Date();
                    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
                    setDateFrom(formatDate(firstDay));
                    setDateTo(formatDate(today));
                  }}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  This Month
                </button>
              </div>
            </div>

            {/* Amount */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-secondary dark:text-white">Amount</h4>
                <button
                  onClick={() => setSortBy('lowToHigh')}
                  className="text-sm text-secondary hover:text-[#3542E8] font-medium"
                >
                  Reset
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-secondary dark:text-white focus:outline-none focus:ring-2 focus:ring-[#414FF4]"
              >
                <option value="lowToHigh">Low to High (Lowest First)</option>
                <option value="highToLow">High to Low (Highest First)</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium text-secondary dark:text-white">Price Range</h4>
                <button
                  onClick={() => setPriceRange(2500)}
                  className="text-sm text-secondary hover:text-[#3542E8] font-medium"
                >
                  Reset
                </button>
              </div>

              <div className="px-2">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: getRangeBackground(priceRange),
                  }}
                />
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span>$0</span>
                  <span>$5000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">
            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => {
                const today = new Date();
                const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
                setDateFrom(formatDate(firstDay));
                setDateTo(getTodayDate());
                setSortBy('lowToHigh');
                setPriceRange(2500);
              }}
            >
              Reset All
            </Button>
            {/* <Button variant="primary" className="flex-1">
              Apply Filters(3)
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
