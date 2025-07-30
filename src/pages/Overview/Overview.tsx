import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { ProductCard } from '../../components/ui/ProductCard';
import { FilterPanel } from '../../components/ui/FilterPanel';
import { Button } from '../../components/common/Button';
import { chartData, productsData } from '../../utils/constants';
import { DateRangeSelector } from './DateRangeSelector';
import useMonthlyData from './utils/useMonthlyData';
import ProductMonitoring from './ProductMonitoring';
import Stats from './Stats';
import { formatDate } from '../../utils/helperFunc';
import { Chart } from './Chart';


export default function Overview() {

  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const formatedStartDate = startDate ? formatDate(startDate) : '';
  const formatedEndDate = endDate ? formatDate(endDate) : '';

  const { data, loading, error } = useMonthlyData(formatedStartDate, formatedEndDate);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="p-6 space-y-6">
      <DateRangeSelector startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
      <Stats data={data} />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Chart data={chartData} />
        <ProductMonitoring startDate={formatedStartDate} endDate={formatedEndDate} />
      </div>

      {/* Products Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <select className="bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
                <option>For sale</option>
              </select>

              <div className="relative flex-1 lg:w-80">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search Shop"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#414FF4]"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                icon={Filter}
                onClick={() => setIsFilterOpen(true)}
              >
                Filter
              </Button>
              <FilterPanel
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
              />

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>1 - 8 of 8 Results</span>
                <select className="bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1 text-sm">
                  <option>Default sort</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};