import React from 'react';
import { makeStyles } from '@material-ui/styles';
import WeekRow from '../WeekRow';
import { getDaysInMonth } from '../utils';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderCollapse: 'collapse'
  }
});

const MonthGrid = ({ firstDayOfMonth }) => {
  const classes = useStyles();

  const calendar = getDaysInMonth(firstDayOfMonth);

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      borderCollapse="collapse"
      className={classes.root}
    >
      <tbody>
        {calendar.map(week => (
          <WeekRow key={week.index} dates={week.weeks} />
        ))}
      </tbody>
    </table>
  );
};

export default MonthGrid;
