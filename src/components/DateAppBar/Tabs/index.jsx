import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
  group: {
    marginTop: 1,
  }
});

const Tabs = ({ content }) => {
  const classes = useStyles();
  return (
      <ButtonGroup
        size="large"
        variant="outlined"
        className={classes.group}
      >
        <Button>Day</Button>
        <Button>Week</Button>
        <Button>Month</Button>
        <Button>Year</Button>
      </ButtonGroup>
  );
};

export default Tabs;
