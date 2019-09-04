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

const YearCal = ({ date }) => {
  const classes = useStyles();

  const months = createMonthList(date);

  return (
    <div className={classes.root}>
      {months.map(month => (
        <MonthBox key={month.name} month={month} />
      ))}
    </div>
  );
};

export default YearCal;
