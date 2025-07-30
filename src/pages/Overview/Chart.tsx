import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { SaleAnylyticsIcon } from '../../components/elements/icons';
import { MonthSelector } from './MonthSelector';
import useChartData from './utils/useChartData';

const formatAmount = (value: number): string => {
  if (value >= 1e7) return (value / 1e7).toFixed(1).replace(/\.0$/, '') + 'cr';
  if (value >= 1e5) return (value / 1e5).toFixed(1).replace(/\.0$/, '') + 'l';
  if (value >= 1e3) return (value / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
  return value.toString();
};

const getYTicks = (max: number): number[] => {
  const step = Math.ceil(max / 5);
  return Array.from({ length: 6 }, (_, i) => i * step);
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const checkout = payload.find((p: any) => p.dataKey === 'totalCheckout');
    const refund = payload.find((p: any) => p.dataKey === 'totalRefunded');

    return (
      <div className="rounded-md px-3 py-2 shadow-md bg-white text-xs text-gray-900 space-y-1">
        {checkout?.value !== 0 && (
          <p>
            <strong>Checkout:</strong> ${checkout.value.toLocaleString()}
          </p>
        )}
        {refund?.value !== 0 && (
          <p>
            <strong>Refund:</strong> ${refund.value.toLocaleString()}
          </p>
        )}
      </div>
    );
  }
  return null;
};


export const Chart: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const { data } = useChartData(year, month);

  const handleMonthSelect = (y: number, m: number) => {
    setYear(y);
    setMonth(m);
  };

  const chartData = data?.chartData ?? [];
  const maxValue = data?.maxValue ?? 0;
  const yTicks = getYTicks(maxValue);

  return (
    <div className="xl:col-span-2">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="flex items-center gap-1 text-lg font-semibold text-secondary/80 dark:text-white mb-1">
            <SaleAnylyticsIcon />
            <p className="text-base"> Sale Analytics</p>
          </h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#B9CFF9]"></div>
              <span className="text-gray-600 dark:text-gray-400">Refund</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#414FF4]"></div>
              <span className="text-gray-600 dark:text-gray-400">Checkout</span>
            </div>
          <MonthSelector onMonthYearSelect={handleMonthSelect} />
          </div>
        </div>

        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barCategoryGap={20} barSize={28}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true} stroke="#E5E7EB" />
              <XAxis dataKey="label" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis
                tickFormatter={formatAmount}
                domain={[0, maxValue]}
                ticks={yTicks}
                tick={{ fontSize: 12 }}
                axisLine={false} tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
              <Bar dataKey="totalCheckout" name="Checkout" radius={[20, 20, 20, 20]}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-checkout-${index}`}
                    fill={entry.isSelected ? '#414FF4' : '#E6E6E6'}
                  />
                ))}
              </Bar>
              <Bar dataKey="totalRefunded" name="Refund" radius={[20, 20, 20, 20]}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-refund-${index}`}
                    fill={entry.isSelected ? '#B9CFF9' : '#F2F2F2'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
