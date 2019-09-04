import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MonthBox from './MonthBox';
import createMonthList from './utils';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

const YearCal = ({ year }) => {
  const classes = useStyles();

  const months = createMonthList(year);

  return (
    <div className={classes.root}>
      {months.map(month => (
        <MonthBox key={month.name} month={month} />
      ))}
    </div>
  );
};

export default YearCal;
