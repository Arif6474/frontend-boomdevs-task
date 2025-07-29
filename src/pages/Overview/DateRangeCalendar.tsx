import React, { useState } from "react";
import {
  addMonths,
  addDays,
  format,
  isSameDay,
  startOfMonth,
  endOfMonth,
  isBefore,
  isAfter,
} from "date-fns";

interface DateRangeCalendarProps {}

const DateRangeCalendar: React.FC<DateRangeCalendarProps> = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Handle date selection
  const handleDateSelection = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (isBefore(date, startDate)) {
        setStartDate(date);
        setEndDate(null);
      } else {
        setEndDate(date);
      }
    }
  };

  // Month navigation
  const goToPrevMonth = () => setCurrentMonth(addMonths(currentMonth, -1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Generate days for the current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
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
          onClick={goToPrevMonth}
          className="p-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Prev
        </button>
        <span className="font-bold text-lg">{format(currentMonth, "MMMM yyyy")}</span>
        <button
          onClick={goToNextMonth}
          className="p-2 bg-gray-300 rounded-md hover:bg-gray-400"
        >
          Next
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-bold">
            {day}
          </div>
        ))}

        {/* Render Days */}
        {daysInMonth.map((day) => {
          const isStart = startDate && isSameDay(day, startDate);
          const isEnd = endDate && isSameDay(day, endDate);
          const inRange =
            startDate && endDate && isAfter(day, startDate) && isBefore(day, endDate);

          return (
            <div
              key={format(day, "yyyy-MM-dd")}
              onClick={() => handleDateSelection(day)}
              className={`cursor-pointer p-2 rounded-md transition
                ${isStart ? "bg-blue-500 text-white" : ""}
                ${isEnd ? "bg-blue-500 text-white" : ""}
                ${inRange ? "bg-blue-200" : ""}
                hover:bg-gray-200`}
            >
              {format(day, "d")}
            </div>
          );
        })}
      </div>

      {/* Display Selected Range */}
      <div className="mt-4">
        <h3 className="font-semibold text-lg">Selected Range:</h3>
        <div className="flex flex-col pl-6">
          <p>Start: {startDate ? format(startDate, "dd MMM yyyy") : "—"}</p>
          <p>End: {endDate ? format(endDate, "dd MMM yyyy") : "—"}</p>
          {startDate && endDate && (
            <p className="text-green-600">
              Range: {format(startDate, "dd MMM yyyy")} → {format(endDate, "dd MMM yyyy")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateRangeCalendar;
