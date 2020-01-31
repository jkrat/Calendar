import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import logger from './middleware/logger';
import reducer from './reducers';

const today = new Date();
const initialState = { date: today, layout: 'year', transactions: [] };

export default function configurestore() {
  const middleware = applyMiddleware(logger, thunkMiddleware);
  const middlewares = composeWithDevTools(middleware);

  const store = createStore(
    reducer,
    initialState,
    middlewares
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducer));
  }

  return store;
}
