import { Search } from 'lucide-react';
import { ProductCard } from '../../components/ui/ProductCard';
import { FilterPanel } from '../../components/ui/FilterPanel';
import { Button } from '../../components/common/Button';
import { FilterIcon } from '../../components/elements/icons';
import { useState } from 'react';
import useTopProductsByShop from './utils/useTopProductsByShop';
import ProductCardSkeleton from '../../components/ui/ProductCardSkeleton';
import ShopMap from './ShopMap';

const getTodayDate = (): string => {
    return formatDate(new Date());
};

const formatDate = (date: Date): string => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

function StoreProducts({
    isFilterOpen,
    setIsFilterOpen,
    searchQuery,
    setSearchQuery,
}: {
    isFilterOpen: boolean;
    setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

}) {
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

    const [dateFrom, setDateFrom] = useState(formatDate(firstDay));
    const [dateTo, setDateTo] = useState(getTodayDate());
    const [sortBy, setSortBy] = useState('lowToHigh');
    const [priceRange, setPriceRange] = useState(2500);

    const { data, loading, error } = useTopProductsByShop({
        startDate: dateFrom,
        endDate: dateTo,
        shopName: searchQuery,
        amount: sortBy,
        priceRange
    });

    const products = data?.products || [];
    const shops = data?.shops || [];

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <select className="bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400">
                            <option>For sale</option>
                        </select>
                    </div>

                    <div className="relative flex-1 lg:w-80">
                        <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search Shop"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-2 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#414FF4]"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            variant="secondary"
                            size="sm"
                            className="!bg-[#2B3674] dark:bg-gray-500 py-3 hover:bg-[#303c7f] dark:hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors"
                            onClick={() => setIsFilterOpen((prev) => !prev)}
                        >
                            <span className="text-secondary">
                                <FilterIcon />
                            </span>
                        </Button>
                        <FilterPanel
                            isOpen={isFilterOpen}
                            onClose={() => setIsFilterOpen(false)}
                            dateFrom={dateFrom}
                            setDateFrom={setDateFrom}
                            dateTo={dateTo}
                            setDateTo={setDateTo}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>{products.length} Results</span>
                    <select className="bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1 text-sm">
                        <option>Default sort</option>
                    </select>
                </div>
            </div>

            <div className="p-6 flex flex-col lg:flex-row gap-6">
                <div className='flex-1 sticky top-10 self-start max-w-md'>
                    <ShopMap shops={shops} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {loading
                        ? Array.from({ length: 2 }).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))
                        : products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default StoreProducts;
