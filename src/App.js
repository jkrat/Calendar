import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import RevvedCalendar from './components/RevvedCalendar';
import { updateTransactionList } from './redux/actions';

const App = ({ fetchData }) => {
  useEffect(() => {
    const url = 'https://localhost:5001/Api/Transactions';
    axios
      .get(url)
      .then(res => res.data)
      .then(data => fetchData(data))
      .catch(err => {
        // handle error
        console.log(err);
      });
  }, []);

  return <RevvedCalendar />;
};

const mapDispatchToProps = dispatch => ({
  fetchData: transactions => {
    console.log(transactions);
    dispatch(updateTransactionList(transactions));
  },
});

export default connect(null, mapDispatchToProps)(App);
