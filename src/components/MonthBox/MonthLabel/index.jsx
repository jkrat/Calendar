import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: 30,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '20px'
  }
});

const MonthLabel = ({ label, color }) => {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      align="center"
      display="block"
      color={color}
      className={classes.root}
    >
      {label}
    </Typography>
  );
};

export default MonthLabel;
