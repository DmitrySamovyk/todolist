import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ReactDOM from 'react-dom';
import { editableTodo, saveTodo } from '../Actions/Actions';

class Todo extends Component {

  render() {
    const tmp = this.props.isEdit ? 'is-edit' : '';
    return (
      <div className={'todo ' + tmp}
           id={this.props.index}>
        <p style={{
             textDecoration: this.props.completed ? 'line-through' : 'none',
             cursor: this.props.completed ? 'default' : 'pointer'
           }}
           onClick={this.props.onClick}>
          {this.props.text}
        </p>
        <input type="text" defaultValue={this.props.text}/>
        <a href="#0"
           className={tmp}
           onClick={() => this.props.editableTodo(this.props.index)}>EDIT</a>
        <a href="#0"
           className={this.props.isEdit ? '' : 'is-edit'}
           onClick={e => this.saveTodoText(e)}>SAVE</a>
        <a href="#0"
           onClick={index => this.props.onRemove(index)}
        >DELETE</a>
      </div>
    );
  }

  saveTodoText(e) {
    let text = document.getElementById(this.props.index).querySelector('input').value;
    this.props.editableTodo(this.props.index);
    this.props.saveTodo(this.props.index, text);
  }

}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  editableTodo: PropTypes.func.isRequired,
  saveTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    editableTodo: bindActionCreators(editableTodo, dispatch),
    saveTodo: bindActionCreators(saveTodo, dispatch)
  }
}

export default connect(null ,mapDispatchToProps)(Todo)