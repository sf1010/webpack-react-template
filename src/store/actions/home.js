import {
  CREATE,
  REMOVE,
} from '../constants/home';

export const create = item => {
  return {
    type: CREATE,
    data: item,
  };
};

export const remove = id => {
  return {
    type: REMOVE,
    data: id,
  };
};
