import { isSameYear, addMonths, format } from 'date-fns';

export default function createMonthList(year) {
  const firstDayofYear = new Date(year, 0, 1);

  const months = [];
  let date = firstDayofYear;
  while (isSameYear(firstDayofYear, date)) {
    months.push({
      name: format(date, 'MMMM'),
      firstDay: date,
    });
    date = addMonths(date, 1);
  }

  return months;
}
