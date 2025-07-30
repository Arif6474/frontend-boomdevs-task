import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, ChevronDown } from 'lucide-react';
import download from '../../assets/downloadIcon.svg';

interface DateRangeSelectorProps {
  startDate: string;
  endDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

export function DateRangeSelector({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: DateRangeSelectorProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close calendar if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // When month is changed, auto select full month range (1st to 30/31)
  const handleMonthChange = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0); // 0 = last day of prev month

    setStartDate(firstDay.toISOString());
    setEndDate(lastDay.toISOString());
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white dark:bg-gray-800 shadow-sm rounded-lg relative">
      {/* Left: Button and selected range */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <button
            ref={buttonRef}
            onClick={() => setShowCalendar(!showCalendar)}
            className="flex items-center gap-2 px-4 py-2 border rounded-md text-secondary hover:text-blue-800 dark:text-white"
          >
            <Calendar className="w-6 h-6 dark:text-gray-300" />
            <span>{new Date(startDate).toLocaleDateString('en-GB', {
                  month: 'long',
                })}</span>
            <ChevronDown className="w-6 h-6 dark:text-gray-300" />
          </button>

          {/* Display selected range */}
          {startDate && endDate && (
            <div className="flex items-center gap-2 text-sm text-secondary dark:text-white">
              <p className="px-4 py-2 border rounded-md">
                {new Date(startDate).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'long',
                })}
              </p>
              <p>to</p>
              <p className="px-4 py-2 border rounded-md">
                {new Date(endDate).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'long',
                })}
              </p>
            </div>
          )}
        </div>

        {/* Calendar UI */}
        {showCalendar && (
          <div ref={calendarRef} className="absolute top-full left-0 z-10">
            <DatePicker
              selected={startDate ? new Date(startDate) : null}
              onChange={(dates: [Date | null, Date | null]) => {
                const [start, end] = dates;
                if (start && end) {
                  const sameMonth =
                    start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear();
                  if (!sameMonth) {
                    alert('Please select dates within the same month.');
                    return;
                  }
                }
                setStartDate(start ? start.toISOString() : '');
                setEndDate(end ? end.toISOString() : '');
              }}
              onMonthChange={handleMonthChange}
              startDate={startDate ? new Date(startDate) : null}
              endDate={endDate ? new Date(endDate) : null}
              selectsRange
              inline
              dateFormat="dd MMMM yyyy"
              className="text-sm text-secondary dark:text-white border-b p-1"
            />
          </div>
        )}
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 border rounded-md text-secondary hover:text-gray-800 dark:text-white">
          Customize Widget
        </button>
        <button className="px-4 py-2 bg-[#414FF4] text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
          <img src={download} alt="Download" />
          <span>Download</span>
        </button>
      </div>
    </div>
  );
}