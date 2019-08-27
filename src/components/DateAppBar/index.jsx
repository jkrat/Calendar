import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Navigation from './Navigation';
import Tabs from './Tabs';

const useStyles = makeStyles({
  container: {
    width: '100%',
    padding: '12px 0',
    borderBottom: '1px solid gray',
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }
});

const DateAppBar = ({ content }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Tabs />
      <div className={classes.title}>
      <Typography variant="h5" align="center"></Typography>
      </div>
      <Navigation />
    </div>
  );
};

export default DateAppBar;
