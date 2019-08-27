import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CalLayout from './CalLayout';

const useStyles = makeStyles({
  root: {}
});

const CalBody = ({ layout, year }) => {
  const classes = useStyles();

  return <CalLayout layout={layout} year={year} />;
};

export default CalBody;
