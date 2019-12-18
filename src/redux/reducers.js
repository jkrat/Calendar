import { forward, backward } from './utils';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_TRANSACTION_LIST':
      return Object.assign({}, state, { transactions: action.payload.transactions });
    case 'CHANGE_CALENDAR_LAYOUT':
      return Object.assign({}, state, { layout: action.payload.layout });
    case 'CALENDAR_FORWARD':
      return Object.assign({}, state, {
        date: forward(action.payload.date, action.payload.layout),
      });
    case 'CALENDAR_BACKWARD':
      return Object.assign({}, state, {
        date: backward(action.payload.date, action.payload.layout),
      });
    case 'SELECT_DATE':
      return Object.assign({}, state, {
        date: action.payload,
      });
    default:
      return state;
  }
}
