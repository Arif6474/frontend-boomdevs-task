export const getCurrentMonthDateRange = () => {
  // Get BD date from local timezone with offset
  const bdDateString = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // Parse BD date correctly (e.g. "07/30/2025")
  const [month, day, year] = bdDateString.split("/").map(Number);

  const format = (y: number, m: number, d: number) =>
    `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  return {
    startDate: format(year, month, 1),
    endDate: format(year, month, day),
  };
};