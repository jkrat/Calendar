import {
  startOfWeek,
  addDays,
  isBefore,
  isMonday,
  isSameMonth,
  isWeekend,
} from 'date-fns';

export default function getDaysInMonth(firstDayOfMonth) {
  const firstDay = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
  const lastDay = addDays(firstDay, 42);

  const Calendar = [];
  let date = firstDay;
  let index = 0;

  while (isBefore(date, lastDay)) {
    if (isMonday(date)) {
      Calendar.push({
        index,
        weeks: [],
      });
    }
    Calendar[Calendar.length - 1].weeks.push({
      key: index,
      date,
      outOfMonth: !isSameMonth(date, firstDayOfMonth),
      isWeekend: isWeekend(date),
    });
    date = addDays(date, 1);
    index += 1;
  }

  return Calendar;
}
