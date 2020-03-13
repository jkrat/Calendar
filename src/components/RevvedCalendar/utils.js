import { format, startOfWeek, endOfWeek } from 'date-fns';

export default function createTitle(date, layout) {
  let title;
  switch (layout) {
    case 'day':
      title = format(date, 'd LLL y');
      break;
    case 'week': {
      const start = startOfWeek(date, { weekStartsOn: 1 });
      const end = endOfWeek(date, { weekStartsOn: 1 });
      title = `${format(start, 'd LLL y')} - ${format(end, 'd LLL y')}`;
      break;
    }
    case 'month':
      title = format(date, 'LLLL y');
      break;
    case 'year':
      title = format(date, 'y');
      break;
    default:
      title = 'Revved Calendar';
  }
  return title;
  
}
