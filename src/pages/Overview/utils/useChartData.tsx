import { useState, useEffect } from 'react';
import useAxiosInstance from '../../../hooks/useAxiosInstance';
import { SALE_ANALYTICS_API } from '../../../utils/APIs';
import { MonthlyData } from '../../../types';

interface UseChartDataResult {
  data: MonthlyData | null;
  loading: boolean;
  error: string | null;
}

const useChartData = (year: number, month: number): UseChartDataResult => {
  const axiosInstance = useAxiosInstance();

  const [data, setData] = useState<MonthlyData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMonthlyData = async () => {
      setLoading(true);
      setError(null);
      const formattedMonth = String(month).padStart(2, '0');

      try {
        const response = await axiosInstance.get(`${SALE_ANALYTICS_API}${year}/${formattedMonth}`);
        setData(response.data.data);
      } catch (error: any) {
        setError(error.response ? error.response.data.message : 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    if (year && month) {
      getMonthlyData();
    }
  }, [axiosInstance, year, month]);

  return { data, loading, error };
};

export default useChartData;
