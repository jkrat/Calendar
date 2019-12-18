import { createStore } from 'redux';
import reducer from './reducers';

const today = new Date();
const initialStore = { date: today, layout: 'year', transactions: [] };

const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
