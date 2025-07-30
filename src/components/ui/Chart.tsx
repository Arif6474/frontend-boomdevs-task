import React from 'react';
import { ChartData } from '../../types';

interface ChartProps {
  data: ChartData[];
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => Math.max(d.income, d.refund)));

  return (
    <div className="xl:col-span-2">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
              Sale Analytics
            </h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#414FF4] rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Refund</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Checkout</span>
              </div>
            </div>
          </div>
          <select className="text-sm bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1 text-gray-600 dark:text-gray-400">
            <option>This Month</option>
          </select>
        </div>

        <div className="relative h-64">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400 dark:text-gray-500">
            <span>3.5k</span>
            <span>2k</span>
            <span>1.5k</span>
            <span>1k</span>
            <span>500</span>
            <span>0</span>
          </div>

          <div className="ml-8 h-full flex items-end justify-between gap-4">
            {data.map((item, index) => {
              const incomeHeight = (item.income / maxValue) * 100;
              const refundHeight = (item.refund / maxValue) * 100;

              return (
                <div key={item.month} className="flex flex-col items-center gap-2 flex-1">
                  <div className="flex items-end gap-1 h-48">
                    <div
                      className="bg-[#414FF4] rounded-t w-4 relative group cursor-pointer transition-all duration-200 hover:bg-[#3542E8]"
                      style={{ height: `${incomeHeight}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${item.income}
                      </div>
                    </div>
                    <div
                      className="bg-blue-300 rounded-t w-4 relative group cursor-pointer transition-all duration-200 hover:bg-blue-400"
                      style={{ height: `${refundHeight}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        ${item.refund}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item.month}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="absolute top-16 right-4 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-2 rounded-lg">
            <div className="text-gray-300 mb-1">Income</div>
            <div className="font-semibold">$108,906</div>
          </div>
        </div>
      </div>
    </div>
  );
};