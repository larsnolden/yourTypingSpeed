import React from 'react';
import RootReducer from 'reducer';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Test from 'views/Test/containers/Test';

const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default () => (
  <Provider store={store}>
    <Test />
  </Provider>
);
