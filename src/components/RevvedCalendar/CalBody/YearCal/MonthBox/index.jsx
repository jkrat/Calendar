import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MonthLabel from './MonthLabel';
import MonthGrid from './MonthGrid';

const useStyles = makeStyles({
  root: {
    margin: '15px 10px',
    width: 225,
    height: 250,
    display: 'inline-block',
    textAlign: 'center',
  },
});

const MonthBox = ({ month }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MonthLabel label={month.name} color="primary" />
      <MonthGrid firstDayOfMonth={month.firstDay} />
    </div>
  );
};

export default MonthBox;
