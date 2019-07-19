import { LIST, CREATE, REMOVE } from '../constants/basic';

export default function home(state, action) {
  const newState = Object.assign({}, state ? state : { list: [] });

  if (action.type === CREATE) {
    const list = Array.isArray(action.item) ? action.item : [action.item];
    newState.list = [...newState.list, ...list];
  } else if (action.type === REMOVE) {
    newState.list = newState.list.filter(item => {
      return item.id !== action.id;
    });
  } else if (action.type === LIST) {
    newState.list = action.list;
  }

  return newState;
}
