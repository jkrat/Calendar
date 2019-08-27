import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CalLayout from './CalLayout';

const useStyles = makeStyles({
  root: {}
});

const CalBody = ({ layout, year }) => {
  const classes = useStyles();

  return (
    <div>
      <CalLayout layout={layout} year={year} />
    </div>
  );
};

export default CalBody;
