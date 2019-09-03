import React from 'react';
import { makeStyles } from '@material-ui/styles';
import WeekRow from '../WeekRow';
import { getDaysInMonth } from '../utils';

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  roo: rows => ({
    width: '100%',
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    '& #body': {
      height: `calc((100vh - 281px) / ${rows})`,
    },
  }),
});

const MonthGrid = ({ firstDayOfMonth }) => {
  const calendar = getDaysInMonth(firstDayOfMonth);
  const rows = calendar.length;
  const classes = useStyles(rows);

  return (
    <div className={classes.roo}>
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
    </div>
  );
};

export default MonthGrid;
