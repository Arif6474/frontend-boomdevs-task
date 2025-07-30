import { ProductMonitoringIcon } from "../../components/elements/icons";
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


    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="flex items-center gap-1 text-lg font-semibold text-secondary/80 dark:text-white mb-1">
                        <ProductMonitoringIcon />
                        <p className="text-base"> Product Monitoring</p>
                    </h3>
                    <p className="text-sm text-secondary/50 dark:text-gray-400">
                        Popular Product
                    </p>
                </div>
                <select className="text-sm bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1 text-gray-600 dark:text-gray-400">
                    <option>Order</option>
                </select>
            </div>
            <div className="space-y-4">
                {data?.slice(0, 4).map((product: Product, index: number) => (
                    <div key={product.productId} className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${index === 0 ? 'bg-secondary/10 dark:bg-gray-30' : 'border-b  border-b-secondary/50 rounded-none'}`}>
                        <div
                            className={`w-6 h-6  rounded-full flex items-center justify-center text-sm font-medium ${index === 0 ? ' text-secondary' : 'text-secondary/50 dark:text-gray-400'}`}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <img
                            src={product.productImage}
                            alt={product.productName}
                            className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h4 className={`font-medium   text-sm ${index === 0 ? ' text-secondary' : 'text-secondary/50 dark:text-gray-400'}`}>
                                {product.productName.split(' ').slice(-1)[0]}
                            </h4>
                        </div>
                        <div className="text-right">
                            <span className={`font-medium   text-sm ${index === 0 ? ' text-[#414FF4]' : 'text-secondary/50 dark:text-gray-400'}`}>
                                {product.totalOrder > 0 ? `${product.totalOrder} Orders` : '10 Orders'}
                            </span>
                        </div>
                    </div>
                ))}
                {
                    data?.length > 4 &&
                    <button className="w-full text-center underline text-sm text-secondary/50 hover:text-secondary font-medium py-2">
                        View All Details
                    </button>
                }
            </div>
        </div>
    );
}