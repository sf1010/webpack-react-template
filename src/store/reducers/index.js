import { combineReducers } from 'redux';
import home from './home';

const allReducers = {
  home,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;