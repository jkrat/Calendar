import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MonthLabel from './MonthLabel';
import MonthGrid from './MonthGrid';
import { isSameYear, addMonths, format } from 'date-fns'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  }
});

const MonthBox = ({ month }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>    
        <MonthLabel label={month.name} />
        <MonthGrid firstDayOfMonth={month.firstDay} />
    </div>
  )
}

export default MonthBox;