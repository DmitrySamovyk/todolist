import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { addTodo, actionTodo, newTaskBlockToggle, removeTodo } from '../Actions/Actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {
  render() {
    const { dispatch, todos } = this.props;
    return (
      <div>

        <TodoList
          todos={todos}
          onTodoClick={index => dispatch(actionTodo(index))}
          newTaskBlockToggle={() => dispatch(newTaskBlockToggle())}
          removeTodoClick={index => dispatch(removeTodo(index))}
           />
        <AddTodo
          onAddClick={text => dispatch(addTodo(text))}
          />
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired
  }))
};

function select(state) {
  return {
    todos: state.todos,
    blockState: state.newTaskToggle
  };
}

export default connect(select)(App);
