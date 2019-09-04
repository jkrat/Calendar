import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 18,
    marginBottom: 7,
  },
  day: {
    width: 32,
    height: 18,
    paddingTop: 2,
    fontSize: 12,
    boxSizing: 'border-box',
    textAlign: 'center',
    display: 'inline-block',
    color: '#6d6969',
  },
});

const WeekHeaders = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body2" component="div" className={classes.day}>
        Mon
      </Typography>
      <Typography variant="body2" component="div" className={classes.day}>
        Tues
      </Typography>
      <Typography variant="body2" component="div" className={classes.day}>
        Wed
      </Typography>
      <Typography variant="body2" component="div" className={classes.day}>
        Thu
      </Typography>
      <Typography variant="body2" component="div" className={classes.day}>
        Fri
      </Typography>
      <Typography variant="body2" component="div" className={classes.day}>
        Sat
      </Typography>
      <Typography variant="body2" component="div" className={classes.day}>
        Sun
      </Typography>
    </div>
  );
};

export default WeekHeaders;
