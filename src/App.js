import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import RevvedCalendar from './components/RevvedCalendar';
import { updateTransactionList } from './redux/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    const url = 'https://localhost:5001/Api/Transactions';
    axios
      .get(url)
      .then(res => res.data)
      .then(data => props.fetchData(data))
      .catch(err => {
        // handle error
        console.log(err);
      });
  }

  render() {
    return <RevvedCalendar />;
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData: transactions => {
    dispatch(updateTransactionList(transactions));
  },
});

export default connect(null, mapDispatchToProps)(App);
