import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { format } from 'date-fns';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  item: {
    width: 32,
    height: 32,
    display: 'inline-block',
    textAlign: 'center',
    boxSizing: 'border-box',
    paddingTop: 2,
  },
  monthDate: outOfMonth => ({
    border: 'none',
    width: 30,
    height: 30,
    display: 'inline-block',
    textAlign: 'center',
    borderRadius: '50%',
    padding: 0,
    boxSizing: 'border-box',
    fontSize: 15,
    lineHeight: '30px',
    fontWeight: 500,
    color: outOfMonth ? '#a7a3a3' : '#474747',
  }),
});

const DayOfMonth = ({ date, outOfMonth, isWeekend }) => {
  const classes = useStyles(outOfMonth);

  const dateToDisplay = format(date, 'dd');
  return (
    <td className={classes.item}>
      <Typography variant="body2" component="div" className={classes.monthDate}>
        {dateToDisplay}
      </Typography>
    </td>
  );
};

export default DayOfMonth;
