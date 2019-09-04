import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
  root: {},
});

const Tabs = () => {
  const classes = useStyles();
  return (
    <ButtonGroup size="large" variant="outlined" color="primary">
      <Button>Day</Button>
      <Button>Week</Button>
      <Button>Month</Button>
      <Button>Year</Button>
    </ButtonGroup>
  );
};

export default Tabs;
