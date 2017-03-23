import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {

  render() {
    return (
      <div className="task-list">
        <div className="todo add-todo-button"
             onClick={() => this.props.newTaskBlockToggle()}>
          <p className="new-todo">+ NEW TASK</p>
        </div>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key = {index}
                onClick = {() => this.props.onTodoClick(index)}
                onRemove = {() => this.props.removeTodoClick(index)}
                isEdit = {todo.isEdit}
                index = {index}
          />
        )}
      </div>
    );
  }

}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired

};
