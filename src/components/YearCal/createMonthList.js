import { isSameYear, addMonths, format } from 'date-fns';

function createMonthList(year) {
  const firstDayofYear = new Date(year, 0, 1);

  let months = [];
  let date = firstDayofYear;
  while (isSameYear(firstDayofYear, date)) {
    months.push({
      name: format(date, 'MMMM'),
      firstDay: date
    });
    date = addMonths(date, 1);
  }

  return months;
}

export default createMonthList;
