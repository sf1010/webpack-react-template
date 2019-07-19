import {
  CREATE,
  REMOVE,
} from '../constants/basic';

export const create = item => {
  return {
    type: CREATE,
    item
  };
};

export const remove = id => {
  return {
    type: REMOVE,
    id
  };
};

