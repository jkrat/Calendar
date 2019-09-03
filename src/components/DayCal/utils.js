/* eslint-disable import/prefer-default-export */
import {
  startOfWeek,
  lastDayOfWeek,
  addDays,
  isBefore,
  format,
} from 'date-fns';

export function getDayHeader(inputDate) {
  return {
    date: inputDate,
    heading: format(inputDate, 'iii, LLLL d'),
  };
}

export function getDaysInWeek(inputDate) {
  const firstDay = startOfWeek(inputDate, { weekStartsOn: 1 });
  const lastDay = addDays(lastDayOfWeek(inputDate, { weekStartsOn: 1 }), 1);

  const Calendar = [];
  let date = firstDay;
  let index = 0;

  while (isBefore(date, lastDay)) {
    Calendar.push({
      key: index,
      date,
    });
    date = addDays(date, 1);
    index += 1;
  }

  return Calendar;
}
