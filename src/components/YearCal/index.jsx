import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MonthBox from '../MonthBox';
import { isSameYear, addMonths, format } from 'date-fns'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  container: {
    margin: '15px 10px',
    width: 224,
    height: 250,
    display: 'inline-block',
    textAlign: 'center'
  }
});

const YearCal = ({ year }) => {
  const classes = useStyles();
  const firstDayofYear = new Date(year, 0, 1);

  let monthsOfYear = [];
  let date = firstDayofYear;
  while (isSameYear(firstDayofYear, date)) {
    monthsOfYear.push({
      name: format(date, 'MMMM'),
      firstDay: date})
    date = addMonths(date, 1)
  }

  return (
    <div className={classes.root}>
    {monthsOfYear.map(month => (
    <div className={classes.container}>
      <MonthBox month={month} />
    </div>
    ))}
    </div>
  )
}

export default YearCal;