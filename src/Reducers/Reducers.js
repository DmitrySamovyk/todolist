import { combineReducers } from 'redux';
import { ADD_TODO, ACTION_TODO, SET_VISIBILITY_FILTER, REMOVE_TODO, VisibilityFilters } from '../Actions/Actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, {
        text: action.text,
        completed: false/*,
        removed: false*/
      }];
    }
    case ACTION_TODO: {
      let completed = {
        completed: !state[action.index].completed
      }
      return stateAsign(state, completed, action)
    }
    case REMOVE_TODO: {

      console.log(state)

      const todoId = action.text

      // return ...state.filter( todo.index !== todoId)

      // return stateAsign(state, removed, action)
    }
    default:
      return state;
  }
}

function stateAsign(state, obj, action) {
  return [
    ...state.slice(0, action.index),
    Object.assign({}, state[action.index], obj),
    ...state.slice(action.index + 1)
  ];
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
