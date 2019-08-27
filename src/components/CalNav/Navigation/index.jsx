import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  button: {
    margin: '0 10px'
  }
});

const Navigation = () => {
  const classes = useStyles();
  return (
    <div>
      <IconButton color="primary">
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Button color="primary" size="large" className={classes.button}>
        Today
      </Button>
      <IconButton color="primary">
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
};

export default Navigation;
