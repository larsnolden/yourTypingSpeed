import { combineReducers } from 'redux';
import textArea from './textArea';
import performance from './performance';
import modal from './modal';

export default combineReducers({
  textArea,
  performance,
  modal,
});
