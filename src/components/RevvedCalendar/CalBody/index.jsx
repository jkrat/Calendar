import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CalLayout from './CalLayout';

const useStyles = makeStyles({
  root: {},
});

const CalBody = ({ date, layout }) => {
  const classes = useStyles();

  return <CalLayout date={date} layout={layout} />;
};

export default CalBody;
