import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import ReactDOM from 'react-dom';
import { editableTodo, saveTodo } from '../Actions/Actions';

class Todo extends Component {

  /*constructor(props) {
    super(props)
    this.state = {
      text: this.props.isEdit
    };
  }*/

  /*getInitialState() {
    return {
      text: <p>{this.props.text}</p>
    };
  }*/

  /*componentWillReceiveProps(nextProps) {
    if ( this.props.isEdit ) {
      console.log(this.props)
      this.setState({
        text: !this.state.text
      })
    }
  }*/

  render() {
    const tmp = this.props.isEdit ? 'is-edit' : '';
    return (
      <div className={'todo ' + tmp}
           id={this.props.index}
           style={{
             opacity: this.props.completed ? 0.5 : 1,
             cursor: this.props.completed ? 'default' : 'pointer'
           }}>
        <p>{this.props.text}</p>
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
    let parentBlock = document.getElementById(this.props.index).querySelector('input').value;
    console.log(parentBlock)
    this.props.editableTodo(this.props.index);
    this.props.saveTodo(this.props.index, parentBlock);
  }

}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    editableTodo: bindActionCreators(editableTodo, dispatch),
    saveTodo: bindActionCreators(saveTodo, dispatch)
  }
}

export default connect(null ,mapDispatchToProps)(Todo)