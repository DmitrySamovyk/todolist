import React, { Component, PropTypes } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <div className="task-list">
        <div className="todo add-todo-button"
             onClick={(e) => this.toggleAddTodo()}>
          <p className="new-todo">+ NEW TASK</p>
        </div>
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key = {index}
                onClick = {() => this.props.onTodoClick(index)}
                onRemove = {() => this.props.onTodoClick(index)}
          />
        )}
      </div>
    );
  }

  toggleAddTodo() {
    const addTodoBlock = document.querySelector('div.new-task');
    if (!hasClass(addTodoBlock, 'active')) {
      addClass(addTodoBlock, 'active')
    } else {
      removeClass(addTodoBlock, 'active')
    }

    /* Helpful function */

    function hasClass(target, className) {
      return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
    }

    function addClass(o, c) {
      const re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g")
      if (re.test(o.className)) return
      o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "")
    }

    function removeClass(o, c) {
      const re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
      if (o == false) {
        return true;
      }
      o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
    }
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
