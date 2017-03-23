export const ADD_TODO = 'ADD_TODO';
export const ACTION_TODO = 'ACTION_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const NEW_TASK_BLOCK_TOGGLE = 'NEW_TASK_BLOCK_TOGGLE';
export const EDITABLE_TODO = 'EDITABLE_TODO';
export const SAVE_TODO = 'SAVE_TODO';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function newTaskBlockToggle(action) {
  return { type: NEW_TASK_BLOCK_TOGGLE, action }
}

export function actionTodo(index) {
  return { type: ACTION_TODO, index }
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function editableTodo(index) {
  return { type: EDITABLE_TODO, index };
}

export function saveTodo(index, text) {
  return { type: SAVE_TODO, index, text }
}
