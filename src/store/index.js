import { createStore } from 'redux';
import rootReducer from './reducers';

export const create = initalState => {
  return createStore(rootReducer, initalState);
};
