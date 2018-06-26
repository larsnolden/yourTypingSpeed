import React from 'react';
import TextArea from 'elements/TextArea/containers/TextArea';
import RootReducer from 'reducer';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  RootReducer,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default () => (
  <Provider store={store}>
    <TextArea />
  </Provider>
);
