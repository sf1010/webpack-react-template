import { combineReducers } from 'redux';
import home from './home';

const allReducers = {
  greeting: (state, action) => {
    return state ? state : '';
  },
  home,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;