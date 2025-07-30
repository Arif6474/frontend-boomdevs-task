// src/hooks/useTopProductsByShop.ts
import { useState, useEffect } from 'react';
import useAxiosInstance from '../../../hooks/useAxiosInstance';
import { TOP_PRODUCTS_BY_SHOP_API } from '../../../utils/APIs';

interface Shop {
  _id: string;
  name: string;
  totalSale: number;
  [key: string]: any;
}

interface Product {
  _id: string;
  name: string;
  salePrice: number;
  [key: string]: any;
}

interface TopProductData {
  shops: Shop[];
  products: Product[];
}

interface UseTopProductsResult {
  data: TopProductData | null;
  loading: boolean;
  error: string | null;
}

interface UseTopProductsParams {
  startDate: string;
  endDate: string;
  shopName?: string;
  amount?: string;
  priceRange?: number;
}

const useTopProductsByShop = ({ startDate, endDate, shopName, amount = 'lowToHigh', priceRange = 2500 }: UseTopProductsParams): UseTopProductsResult => {
  const axiosInstance = useAxiosInstance();

  const [data, setData] = useState<TopProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(TOP_PRODUCTS_BY_SHOP_API, {
          params: {
            startDate,
            endDate,
            shopName,
            amount,
            priceRange
          }
        });
        setData(response.data.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch top products');
      } finally {
        setLoading(false);
      }
    };

    if (startDate && endDate) {
      fetchTopProducts();
    }
  }, [axiosInstance, startDate, endDate, shopName, amount, priceRange]);

  return { data, loading, error };
};

export default useTopProductsByShop;
