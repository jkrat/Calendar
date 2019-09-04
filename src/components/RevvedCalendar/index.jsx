import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CalNav from './CalNav';
import CalBody from './CalBody';

const useStyles = makeStyles({
  root: {},
});

const RevvedCalendar = () => {
  const classes = useStyles();

  const layout = 'day';
  const date = new Date();
  return (
    <>
      <CalNav />
      <CalBody layout={layout} date={date} />
    </>
  );
};

export default RevvedCalendar;
