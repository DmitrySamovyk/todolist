import React, { Component, PropTypes } from 'react';
import { removeTodo } from '../Actions/Actions'
import ReactDOM from 'react-dom';

export default class Todo extends Component {
  render() {
    console.log(this.props)
    return (

      <div className="todo"
           onClick={this.props.onClick}
           style={{
             opacity: this.props.completed ? 0.5 : 1,
             cursor: this.props.completed ? 'default' : 'pointer'
           }}>
        <p>
          {this.props.text}
        </p>
        <a href="#0">EDIT</a>
        <a href="#0">DELETE</a>
      </div>
    );
  }

  handleDelete = (ev) => {
    ev.preventDefault();
    this.props.onTodoClick(event.target)
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
