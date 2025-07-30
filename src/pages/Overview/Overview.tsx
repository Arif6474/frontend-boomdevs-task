import { useState } from 'react';
import { DateRangeSelector } from './DateRangeSelector';
import useMonthlyData from './utils/useMonthlyData';
import ProductMonitoring from './ProductMonitoring';
import Stats from './Stats';
import { formatDate } from '../../utils/helperFunc';
import { Chart } from './Chart';
import StoreProducts from './StoreProducts';
import { getCurrentMonthDateRange } from './utils/getCurrentMonthDataRange';


export default function Overview() {

  const { startDate: defaultStart, endDate: defaultEnd } = getCurrentMonthDateRange();

  const [startDate, setStartDate] = useState<string>(defaultStart);
  const [endDate, setEndDate] = useState<string>(defaultEnd);
  const formatedStartDate = startDate ? formatDate(startDate) : '';
  const formatedEndDate = endDate ? formatDate(endDate) : '';

  const { data, loading, error } = useMonthlyData(formatedStartDate, formatedEndDate);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  return (
    <div className="p-6 space-y-6">
      <DateRangeSelector startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
      <Stats data={data} />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <Chart />
        <ProductMonitoring startDate={formatedStartDate} endDate={formatedEndDate} />
      </div>
      <StoreProducts
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};