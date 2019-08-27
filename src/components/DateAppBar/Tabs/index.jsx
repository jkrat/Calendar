import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
  group: {
    marginTop: 1,
  }
});

const Tabs = ({ content, color = "default" }) => {
  const classes = useStyles();
  return (
      <ButtonGroup
        size="large"
        variant="outlined"
        className={classes.group}
      >
        <Button color={color}>Day</Button>
        <Button color={color}>Week</Button>
        <Button color={color}>Month</Button>
        <Button color={color}>Year</Button>
      </ButtonGroup>
  );
};

export default Tabs;
