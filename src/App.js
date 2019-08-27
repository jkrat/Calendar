import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import DateAppBar from './components/DateAppBar';
import YearCal from './components/YearCal';

const useStyles = makeStyles({
  root: {}
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <DateAppBar />
      <Container maxWidth="lg">
        <YearCal year={2019} />
      </Container>
    </>
  );
};

export default App;
