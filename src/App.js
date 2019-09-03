import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CalNav from './components/CalNav';
import CalBody from './components/CalBody';

const useStyles = makeStyles({
  root: {},
});

const App = () => {
  const classes = useStyles();

  const layout = 'day';
  const year = 2019;
  return (
    <>
      <CalNav />
      <CalBody layout={layout} year={year} />
    </>
  );
};

export default App;
