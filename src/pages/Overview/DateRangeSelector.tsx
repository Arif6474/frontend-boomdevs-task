import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import download from '../../assets/downloadIcon.svg';
import { ArrowDown, ChevronDown } from 'lucide-react';

export const DateRangeSelector: React.FC = () => {
  // State for start and end date
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // State to toggle calendar visibility
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  // Ref to handle clicks outside the calendar to close it
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close the calendar if clicked outside
  const handleClickOutside = (e: MouseEvent) => {
    if (calendarRef.current && !calendarRef.current.contains(e.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setShowCalendar(false);
    }
  };

  // Add event listener on mount and remove on unmount
  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handler to reset selected dates when the user changes the month
  const handleMonthChange = (date: Date) => {
    // If the month changes, reset the selected dates
    const currentMonth = date.getMonth();
    if (startDate && currentMonth !== startDate.getMonth()) {
      setStartDate(null);
      setEndDate(null);
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.7995 14.5683L14.7656 21.6022L11.3086 22.2937L12 18.8366L19.0339 11.8027C19.3997 11.437 19.8958 11.2316 20.413 11.2316C20.9303 11.2316 21.4264 11.437 21.7922 11.8027L21.7995 11.8101C21.9809 11.9911 22.1247 12.2061 22.2228 12.4428C22.3209 12.6794 22.3715 12.933 22.3715 13.1892C22.3715 13.4454 22.3209 13.6991 22.2228 13.9357C22.1247 14.1724 21.9809 14.3874 21.7995 14.5683Z" stroke="#2B3674" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.23438 16.8398H3.01172C2.64498 16.8398 2.29325 16.6942 2.03392 16.4349C1.77459 16.1755 1.62891 15.8238 1.62891 15.457V4.40837C1.62891 4.04163 1.77459 3.68991 2.03392 3.43058C2.29325 3.17125 2.64498 3.02556 3.01172 3.02556H15.457C15.8238 3.02556 16.1755 3.17125 16.4349 3.43058C16.6942 3.68991 16.8398 4.04163 16.8398 4.40837V8.54298" stroke="#2B3674" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.62891 7.16016H16.8398" stroke="#2B3674" stroke-width="1.25" stroke-linejoin="round" />
            <path d="M5.77087 4.39453V1.62891" stroke="#2B3674" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.685 4.39453V1.62891" stroke="#2B3674" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span>Month     </span>
          <ChevronDown className="text-secondary/70 text-sm font-thin dark:text-gray-300 w-6 h-6" />
        </button>

        <span className="text-secondary dark:text-white">
          {/* Show calendar if showCalendar is true */}
          {showCalendar && (
            <div ref={calendarRef} className="absolute top-full  left-0 z-10">
              <DatePicker
                selected={startDate}
                onChange={(dates: [Date | null, Date | null]) => {
                  const [start, end] = dates;
                  setStartDate(start);
                  setEndDate(end);
                }}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                dateFormat="dd MMMM yyyy"
                className="text-sm text-secondary dark:text-white border-b p-1"
                // Restrict date range to same month for start and end date
                minDate={startDate ? new Date(startDate.getFullYear(), startDate.getMonth(), 1) : undefined}
                maxDate={startDate ? new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0) : undefined}
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
};
