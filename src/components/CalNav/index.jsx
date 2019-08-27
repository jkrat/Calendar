import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Navigation from './Navigation';
import Tabs from './Tabs';

const useStyles = makeStyles({
  container: {
    width: '100%',
    padding: '12px 20px',
    borderBottom: '1px solid gray',
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 200
  }
});

const CalNav = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Tabs />
      <div className={classes.title}>
        <Typography variant="h5" align="left">
          {title}
        </Typography>
      </div>
      <Navigation />
    </div>
  );
};

export default CalNav;
