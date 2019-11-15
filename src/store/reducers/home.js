import { LIST, CREATE, REMOVE } from '../constants/home';

export default function home(state, action) {
  const newState = Object.assign({}, state ? state : { list: [] });

  switch (action.type) {
    case CREATE:
      console.log('create');

      const list = Array.isArray(action.data) ? action.data : [action.data];

      newState.list = [...newState.list, ...list];

      break;
    case REMOVE:
      newState.list = newState.list.filter(item => {
        return item.id !== action.data;
      });

      break;
    case LIST:
      newState.list = action.list;

      break;
    default:
      break;
  }

  return newState;
}
