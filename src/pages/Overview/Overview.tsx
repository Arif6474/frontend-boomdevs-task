import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { StatsCard } from '../../components/ui/StatsCard';
import { Chart } from '../../components/ui/Chart';
import { ProductCard } from '../../components/ui/ProductCard';
import { FilterPanel } from '../../components/ui/FilterPanel';
import { Button } from '../../components/common/Button';
import { statsData, chartData, productsData } from '../../utils/constants';
import { DateRangeSelector } from './DateRangeSelector';

export default function Overview() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <DateRangeSelector />
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} data={stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <Chart data={chartData} />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                Product Monitoring
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Popular Product
              </p>
            </div>
            <select className="text-sm bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1 text-gray-600 dark:text-gray-400">
              <option>Order</option>
            </select>
          </div>

          <div className="space-y-4">
            {productsData.slice(0, 4).map((product, index) => (
              <div key={product.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                    {product.name}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {product.orders > 0 ? `${product.orders} Orders` : '10 Orders'}
                  </span>
                </div>
              </div>
            ))}
            <button className="w-full text-center text-sm text-[#414FF4] hover:text-[#3542E8] font-medium py-2">
              view all details
            </button>
          </div>
        </div>
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

      <FilterPanel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    </div>
  );
};