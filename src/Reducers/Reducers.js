import { combineReducers } from 'redux';
import { ADD_TODO, ACTION_TODO, REMOVE_TODO, NEW_TASK_BLOCK_TOGGLE, EDITABLE_TODO, SAVE_TODO } from '../Actions/Actions';
import { initialTodoState, blockState } from '../state/store';

function newTaskToggle(state = {blockState}, action) {
  switch (action.type) {
    case NEW_TASK_BLOCK_TOGGLE:
      return {
        ...state,
        blockState: !state.blockState
      };
    default:
      return state;
  }
}

function todos(state = {initialTodoState}, action) {

  switch (action.type) {
    case ADD_TODO: {
      return [...state, {
        text: action.text,
        completed: false,
        isEdit: false
      }];
    }
    case ACTION_TODO: {
      let completed = {
        completed: !state[action.index].completed
      }
      return stateAsign(state, completed, action)
    }
    case REMOVE_TODO: {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    }
    case EDITABLE_TODO: {
      let isEdit = {
        isEdit: !state[action.index].isEdit
      }
      return stateAsign(state, isEdit, action)
    }
    case SAVE_TODO: {
      console.log(action)
      state.map(function (todo, index) {
        console.log(index, action.index)
        if ( index === action.index ) {
          todo.text = action.text
        }
      })
      return state;
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
  todos,
  newTaskToggle
});

export default todoApp;
