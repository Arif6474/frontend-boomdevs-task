import { useState, useEffect } from 'react';// Import your custom hook
import useAxiosInstance from '../../../hooks/useAxiosInstance';
import { REPORTS_API } from '../../../utils/APIs';
import { MonthlyData } from '../../../types';


// interface MonthlyData {
//   currentEarnings: number;
//   currentOrders: number;
//   currentSales: number;
//   currentCustomers: number;
//   previousMonthComparison: {
//     earningsDifference: number;
//     ordersDifference: number;
//     salesDifference: number;
//     customersDifference: number;
//     earningsPercentageChange: number;
//     ordersPercentageChange: number;
//     salesPercentageChange: number;
//     customersPercentageChange: number;
//   };
// }

interface UseMonthlyDataResult {
  data: MonthlyData | null;
  loading: boolean;
  error: string | null;
}

const useMonthlyData = (startDate: string, endDate: string): UseMonthlyDataResult => {

  const axiosInstance = useAxiosInstance();

  const [data, setData] = useState<MonthlyData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMonthlyData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axiosInstance.get(`${REPORTS_API}${startDate}/${endDate}`);
        setData(response.data.data); 
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

export default useMonthlyData;
