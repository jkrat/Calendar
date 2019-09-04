import {
  addDays,
  subDays,
  addWeeks,
  subWeeks,
  addMonths,
  subMonths,
  addYears,
  subYears,
} from 'date-fns';

export function forward(date, layout) {
  let result;
  switch (layout) {
    case 'day':
      result = addDays(date, 1);
      break;
    case 'week':
      result = addWeeks(date, 1);
      break;
    case 'month':
      result = addMonths(date, 1);
      break;
    case 'year':
      result = addYears(date, 1);
      break;
    default:
      result = date;
  }
  return result;
}

export function backward(date, layout) {
  let result;
  switch (layout) {
    case 'day':
      result = subDays(date, 1);
      break;
    case 'week':
      result = subWeeks(date, 1);
      break;
    case 'month':
      result = subMonths(date, 1);
      break;
    case 'year':
      result = subYears(date, 1);
      break;
    default:
      result = date;
  }
  return result;
}
