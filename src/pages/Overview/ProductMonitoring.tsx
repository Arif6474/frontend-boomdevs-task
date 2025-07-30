import useProductData from "./utils/useProductData";

interface Product {
    productId: string;
    productImage: string;
    productName: string;
    totalOrder: number;
}

interface ProductMonitoringProps {
    startDate: string;
    endDate: string;
}


export default function ProductMonitoring({ startDate, endDate }: ProductMonitoringProps) {
    const { data, loading, error } = useProductData(startDate, endDate);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
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
                {data?.slice(0, 4).map((product: Product, index: number) => (
                    <div key={product.productId} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <div className="w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm font-medium text-gray-600 dark:text-gray-400">
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <img
                            src={product.productImage}
                            alt={product.productName}
                            className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                                {product.productName.split(' ').slice(-1)[0]}  {/* Get the last word */}
                            </h4>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {product.totalOrder > 0 ? `${product.totalOrder} Orders` : '10 Orders'}
                            </span>
                        </div>
                    </div>
                ))}
                <button className="w-full text-center text-sm text-[#414FF4] hover:text-[#3542E8] font-medium py-2">
                    View All Details
                </button>
            </div>
        </div>
    );
}