import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CalNav from './components/CalNav';
import CalBody from './components/CalBody';

const useStyles = makeStyles({
  root: {}
});

const App = () => {
  const classes = useStyles();

  const layout = 'year';
  const year = 2019;
  return (
    <>
      <CalNav />
      <Container maxWidth="lg">
        <CalBody layout={layout} year={year} />
      </Container>
    </>
  );
};

export default App;
