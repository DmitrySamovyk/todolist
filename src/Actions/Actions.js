export const ADD_TODO = 'ADD_TODO';
export const ACTION_TODO = 'ACTION_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function actionTodo(index) {
  return { type: ACTION_TODO, index };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
