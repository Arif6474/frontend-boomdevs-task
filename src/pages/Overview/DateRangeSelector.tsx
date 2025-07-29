import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown } from 'lucide-react';
import download from '../../assets/downloadIcon.svg';

interface DateRangeSelectorProps {
  startDate: string;
  endDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

export function DateRangeSelector({ startDate, endDate, setStartDate, setEndDate }: DateRangeSelectorProps) {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const calendarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close the calendar if clicked outside
  const handleClickOutside = (e: MouseEvent) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setShowCalendar(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMonthChange = (date: Date) => {
    const currentMonth = date.getMonth();
    if (startDate && currentMonth !== new Date(startDate).getMonth()) {
      // Reset the start and end date if the month is changed
      setStartDate('');
      setEndDate('');
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg relative">
      {/* Date Range Section */}
      <div className="flex items-center gap-4">
        <button
          ref={buttonRef}
          onClick={() => setShowCalendar(!showCalendar)}
          className="flex items-center gap-2 px-4 py-2 border rounded-md text-secondary hover:text-blue-800"
        >
          <span>Month</span>
          <ChevronDown className="text-secondary/70 text-sm font-thin dark:text-gray-300 w-6 h-6" />
        </button>

        <span className="text-secondary dark:text-white">
          {/* Show calendar if showCalendar is true */}
          {showCalendar && (
            <div ref={calendarRef} className="absolute top-full left-0 z-10">
              <DatePicker
                selected={startDate ? new Date(startDate) : null}
                onChange={(dates: [Date | null, Date | null]) => {
                  const [start, end] = dates;
                  setStartDate(start ? start.toISOString() : ''); // Save start date as string
                  setEndDate(end ? end.toISOString() : ''); // Save end date as string
                }}
                startDate={startDate ? new Date(startDate) : null}
                endDate={endDate ? new Date(endDate) : null}
                selectsRange
                inline
                dateFormat="dd MMMM yyyy"
                className="text-sm text-secondary dark:text-white border-b p-1"
                // Restrict date range to the same month for start and end date
                minDate={startDate ? new Date(new Date(startDate).getFullYear(), new Date(startDate).getMonth(), 1) : undefined}
                maxDate={startDate ? new Date(new Date(startDate).getFullYear(), new Date(startDate).getMonth() + 1, 0) : undefined}
                onMonthChange={handleMonthChange} // Reset dates when month is changed
              />
            </div>
          )}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 border rounded-md text-secondary hover:text-gray-800 dark:text-white">
          Customize Widget
        </button>
        <button className="px-4 py-2 bg-[#414FF4] text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
          <div>
            <img src={download} alt="" />
          </div>
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}
