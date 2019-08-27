import React from 'react';
import { makeStyles } from '@material-ui/styles';
import DayOfMonth from '../DayOfMonth';

const useStyles = makeStyles({
  root: {
    
  }
});

const WeekRow = ({ dates }) => {
  const classes = useStyles();
  return (
    <tr>
      {dates.map(day => {
        let { key, date, outOfMonth, isWeekend } = day;
        return (
          <DayOfMonth 
            key={key} 
            date={date} 
            outOfMonth={outOfMonth} 
            isWeekend={isWeekend}  
          />
        )
      })}
    </tr>
  )
}

export default WeekRow;