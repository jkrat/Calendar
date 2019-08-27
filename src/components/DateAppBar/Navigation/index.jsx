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

const Navigation = ({ content }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <IconButton>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Button size="large" variant="outlined" className={classes.button}>
        Today
      </Button>
      <IconButton>
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
};

export default Navigation;
