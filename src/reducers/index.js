import {
  combineReducers,
} from 'redux';

/**
 * todos
 */
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      const data = state.slice()
      data.push(action.value)
      return data;
    case 'REMOVE':
      return [];
    default:
      return state;
  }
};

export const reducers = combineReducers({
  todos,
});
