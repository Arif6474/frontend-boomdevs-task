import { Search } from 'lucide-react';
import { ProductCard } from '../../components/ui/ProductCard';
import { FilterPanel } from '../../components/ui/FilterPanel';
import { Button } from '../../components/common/Button';
import { FilterIcon } from '../../components/elements/icons';

function StoreProducts({ isFilterOpen, setIsFilterOpen, searchQuery, setSearchQuery, filteredProducts }: { isFilterOpen: boolean, setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean>>, searchQuery: string, setSearchQuery: React.Dispatch<React.SetStateAction<string>>, filteredProducts: any[] }) {
    return (
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
                            className='bg-[#2B3674] py-3'

                            onClick={() => setIsFilterOpen(true)}
                        >
                            <span className='text-secondary'> <FilterIcon /></span>
                        </Button>
                        <FilterPanel
                            isOpen={isFilterOpen}
                            onClose={() => setIsFilterOpen(false)}
                        />

                    </div>
                </div>
                <div className="flex items-center justify-between pt-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>1 - 8 of 8 Results</span>
                    <select className="bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1 text-sm">
                        <option>Default sort</option>
                    </select>
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
    )
}

export default StoreProducts