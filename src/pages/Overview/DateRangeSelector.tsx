import React, { useState } from 'react';
import download from '../../assets/downloadIcon.svg'
import MultiDateCalendar from './MultiDatePicker';

export const DateRangeSelector: React.FC = () => {
  const [startDate, setStartDate] = useState('01 March');
  const [endDate, setEndDate] = useState('30 March');

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg">
      {/* Date Range Section */}
      <div className="flex items-center gap-4">
        <MultiDateCalendar />
        <span className="text-secondary dark:text-white">{startDate} to {endDate}</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 border  rounded-md text-secondary hover:text-gray-800 dark:text-white">
          Customize Widget
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
          <div>
            <img src={download} alt="" />
          </div>
          <span>Download</span>
        </button>
      </div>
    </div>
  );
};
