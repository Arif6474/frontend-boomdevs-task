import React, { useState } from "react";
import { addDays, format, isSameDay, startOfMonth, endOfMonth, isBefore, isAfter } from "date-fns";

interface DateRangeCalendarProps {}

const DateRangeCalendar: React.FC<DateRangeCalendarProps> = () => {
  // State to manage the selected range
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Function to handle date selection
  const handleDateSelection = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      // Start a new range
      setStartDate(date);
      setEndDate(null); // Reset end date if a new range is started
    } else if (startDate && !endDate) {
      // Set the end date for the range
      if (isBefore(date, startDate)) {
        setStartDate(date); // If the selected date is before the start date, make it the start
        setEndDate(null); // Reset the end date to select a new range
      } else {
        setEndDate(date);
      }
    }
  };

  // Get the start and end dates of the current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  // Generate days of the month
  const daysInMonth: Date[] = [];
  let currentDay = monthStart;
  while (currentDay <= monthEnd) {
    daysInMonth.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }

  return (
    <div className="relative w-80 p-4 bg-white rounded-lg shadow-lg">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentMonth(addDays(currentMonth, -30))}
          className="p-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Prev
        </button>
        <span className="font-bold text-lg">{format(currentMonth, "MMMM yyyy")}</span>
        <button
          onClick={() => setCurrentMonth(addDays(currentMonth, 30))}
          className="p-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Next
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        <div className="font-bold">Sun</div>
        <div className="font-bold">Mon</div>
        <div className="font-bold">Tue</div>
        <div className="font-bold">Wed</div>
        <div className="font-bold">Thu</div>
        <div className="font-bold">Fri</div>
        <div className="font-bold">Sat</div>

        {/* Render Days */}
        {daysInMonth.map((day) => (
          <div
            key={day.toString()}
            onClick={() => handleDateSelection(day)}
            className={`cursor-pointer p-2 rounded-md 
              ${startDate && endDate && isSameDay(day, startDate) && isSameDay(day, endDate) ? 'bg-blue-500 text-white' : ''}
              ${startDate && !endDate && isBefore(day, startDate) ? 'bg-blue-100' : ''}
              ${endDate && isAfter(day, startDate) && isBefore(day, endDate) ? 'bg-blue-200' : ''}
              ${format(day, 'E') === 'Sun' ? 'text-red-500' : ''}
              hover:bg-gray-200`}
          >
            {format(day, "d")}
          </div>
        ))}
      </div>

      {/* Display Selected Range */}
      <div className="mt-4">
        <h3 className="font-semibold text-lg">Selected Range:</h3>
        <div className="flex flex-col pl-6">
          {startDate ? (
            <p>Start: {format(startDate, "dd MMM yyyy")}</p>
          ) : (
            <p>No start date selected</p>
          )}
          {endDate ? (
            <p>End: {format(endDate, "dd MMM yyyy")}</p>
          ) : (
            <p>No end date selected</p>
          )}
          {startDate && endDate && (
            <p className="text-green-600">
              Range: {format(startDate, "dd MMM yyyy")} - {format(endDate, "dd MMM yyyy")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateRangeCalendar;
