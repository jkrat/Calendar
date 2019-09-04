import React from 'react';
import { makeStyles } from '@material-ui/styles';
import WeekHeaders from '../WeekHeaders';
import MonthBody from '../MonthBody';

const useStyles = makeStyles({
  root: {},
});

const MonthGrid = ({ firstDayOfMonth }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WeekHeaders />
      <MonthBody firstDayOfMonth={firstDayOfMonth} />
    </div>
  );
};

export default MonthGrid;
