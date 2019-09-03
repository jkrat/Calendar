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
    width: '100%',
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

const DayHeader = ({ header }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="body2" component="div" className={classes.day}>
        {header.heading}
      </Typography>
    </div>
  );
};

export default DayHeader;
