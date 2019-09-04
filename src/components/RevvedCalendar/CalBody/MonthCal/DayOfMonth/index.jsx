import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { format } from 'date-fns';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {},
  item: {
    width: 'calc(100% / 7)',
    boxSizing: 'border-box',
    padding: 4,
    border: '1px solid grey',
  },
  head: outOfMonth => ({
    textAlign: 'right',
    padding: 0,
    boxSizing: 'border-box',
    fontSize: 15,
    height: 20,
    color: outOfMonth ? '#a7a3a3' : '#474747',
  }),
  body: {
    // height: 90,
  },
});

const DayOfMonth = ({ date, outOfMonth, isWeekend }) => {
  const classes = useStyles(outOfMonth);

  const dateToDisplay = format(date, 'dd');
  return (
    <td className={classes.item}>
      <Typography variant="body2" component="div" className={classes.head}>
        {dateToDisplay}
      </Typography>
      <div className={classes.body} id="body" />
    </td>
  );
};

export default DayOfMonth;
