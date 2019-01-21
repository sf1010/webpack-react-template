import {
  CREATE,
  REMOVE,
} from '../constant/basic';

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

