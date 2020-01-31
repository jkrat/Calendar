import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import theme from './config/muiTheme';
import configureStore from './redux/store';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
