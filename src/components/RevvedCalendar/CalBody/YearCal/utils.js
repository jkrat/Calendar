import { isSameYear, startOfYear, addMonths, format } from 'date-fns';

export default function createMonthList(selectedDate) {
  const firstDayofYear = startOfYear(selectedDate);

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
