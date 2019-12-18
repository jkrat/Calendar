import { isSameYear, startOfYear, addMonths, format, isSameMonth } from 'date-fns';

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

export function transactionForMonthByDay(transactions, date) {
  console.log(transactions.length);
  transactions.forEach(trans => console.log(trans.Date));
  const transInMonth = transactions.filter(t => isSameYear(t.Date, date) && isSameMonth(t.Date, date));
  console.log(transInMonth.length);
  const transByDate = transInMonth.reduce((acc, trans) => {
    const { Date } = trans;
    return { ...acc, [Date]: [...(acc[Date] || []), trans] };
  }, {});
  // console.log(transByDate);
  return transByDate;
}
