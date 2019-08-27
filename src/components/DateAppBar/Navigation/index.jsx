import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  container: {},
  button: {}
});

const Navigation = ({ content, color }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <IconButton color={color}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Button color={color} size="large" variant="outlined" className={classes.button}>
        Today
      </Button>
      <IconButton color={color}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
};

export default Navigation;
