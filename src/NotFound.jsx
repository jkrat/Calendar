import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: 200,
    textAlign: 'center',
  },
});

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>Page not found</h3>
    </div>
  );
};

export default NotFound;
