import React from 'react';
import axios from 'axios';
import RevvedCalendar from './components/RevvedCalendar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      transactions: {},
    };
  }

  componentWillMount() {
    fetch('Api/Transactions')
      .then(data => data.json())
      .then(
        result => {
          console.log('connected');
          this.setState({
            transactions: result,
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    return <RevvedCalendar />;
  }
}

export default App;
