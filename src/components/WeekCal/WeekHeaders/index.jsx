import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    height: 18,
    marginBottom: 7,
  },
  day: {
    width: 'calc(100% / 7)',
    height: 18,
    paddingTop: 2,
    fontSize: 15,
    fontWeight: 500,
    lineHeight: '16px',
    boxSizing: 'border-box',
    textAlign: 'center',
    display: 'inline-block',
    color: '#6d6969',
  },
});

const WeekHeaders = ({ headers }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {headers.map(day => (
        <Typography
          variant="body2"
          component="div"
          key={day.index}
          className={classes.day}
        >
          {day.heading}
        </Typography>
      ))}
    </div>
  );
};

export default WeekHeaders;
