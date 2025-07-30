export const getCurrentMonthDateRange = () => {
  const now = new Date();

  // Convert current UTC time to BD time (UTC+6)
  const bdTime = new Date(now.getTime() + 6 * 60 * 60 * 1000);

  const year = bdTime.getFullYear();
  const month = bdTime.getMonth();
  const today = bdTime.getDate();

  const format = (y: number, m: number, d: number) =>
    `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  return {
    startDate: format(year, month, 1),     // 1st of month
    endDate: format(year, month, today),   // Today (in BD)
  };
};
