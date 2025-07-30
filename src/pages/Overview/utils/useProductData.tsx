import { useState, useEffect } from 'react'; // Import your custom hook
import useAxiosInstance from '../../../hooks/useAxiosInstance';
import { TOP_PRODUCTS_BY_ORDER_API } from '../../../utils/APIs';
import { MonthlyData } from '../../../types';

interface UseProductDataResult {
  data: MonthlyData | null;
  loading: boolean;
  error: string | null;
}

const useProductData = (startDate: string, endDate: string): UseProductDataResult => {
  const axiosInstance = useAxiosInstance();

  const [data, setData] = useState<MonthlyData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMonthlyData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(`${TOP_PRODUCTS_BY_ORDER_API}${startDate}/${endDate}`);
        setData(response.data.data);  // Assuming the API returns data in this structure
      } catch (error: any) {
        setError(error.response ? error.response.data.message : 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    if (startDate && endDate) {
      getMonthlyData();
    }
  }, [axiosInstance, startDate, endDate]);

  return { data, loading, error };
};

export default useProductData;