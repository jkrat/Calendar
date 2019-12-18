import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { startOfWeek, addDays, isBefore, isMonday, isSameMonth, isWeekend } from 'date-fns';
import { transactionForMonthByDay } from '../../utils';
import WeekRow from '../WeekRow';

const useStyles = makeStyles({
  root: {
    width: 225,
    height: 192,
    display: 'inline-block',
    border: 'none',
    '& table': {
      width: 225,
      height: 192,
      display: 'inline-block',
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      border: 'none',
    },
  },
});

const MonthBody = ({ firstDayOfMonth, transactions }) => {
  const classes = useStyles();
  const trans = transactionForMonthByDay(transactions, firstDayOfMonth);
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
      transactions: transactions[date],
      outOfMonth: !isSameMonth(date, firstDayOfMonth),
      isWeekend: isWeekend(date),
    });
    date = addDays(date, 1);
    index += 1;
  }

  return (
    <div className={classes.root}>
      <table cellPadding="0" cellSpacing="0">
        <tbody>
          {Calendar.map(week => (
            <WeekRow key={week.index} dates={week.weeks} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  const { transactions } = state;
  return { transactions };
};

export default connect(mapStateToProps)(MonthBody);
