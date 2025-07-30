import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  onMonthYearSelect: (year: number, month: number) => void;
}

export const MonthSelector: React.FC<Props> = ({ onMonthYearSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (date: Date) => {
    setSelectedDate(date);
    setShowPicker(false);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // JS months are 0-based
    onMonthYearSelect(year, month);
  };

  return (
    <div className="relative">
      <button
        className="text-sm bg-transparent border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-1 text-gray-600 dark:text-gray-400"
        onClick={() => setShowPicker(!showPicker)}
      >
        {selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}
      </button>

      {showPicker && (
        <div className="absolute z-10 mt-2">
          <DatePicker
            selected={selectedDate}
            onChange={handleChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            inline
          />
        </div>
      )}
    </div>
  );
};
