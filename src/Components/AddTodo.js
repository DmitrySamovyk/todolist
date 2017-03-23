import React, { findDOMNode, Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

class AddTodo extends Component {
  render() {
    const tmp = this.props.blockState ? "new-task active" : "new-task";
    return (
      <div className={tmp}>
        <div className="add-task-block">
          <h1>NEW TASK</h1>
          <p className="todo-text">I need <span className="service-type"></span> to <span className="plumber-task"></span></p>
          <a href="#0"
             onClick={e => this.handleClick(e)}>
            CREATE TASK
          </a>
        </div>

        <div className="service-type-block">
          <h1>SERVICE TYPE</h1>
          <div className="service-type-wrap service select">
            <div className="service-single todo-element">
              <span className="img-wrap">
                <img src="./img/noun_321339_cc.svg" alt=""/>
              </span>
              <p>Electrician</p>
            </div>
            <div className="service-single todo-element">
              <span className="img-wrap">
                <img src="./img/noun_321315_cc.svg" alt=""/>
              </span>
              <p>Plumber</p>
            </div>
            <div className="service-single todo-element">
              <span className="img-wrap">
                <img src="./img/noun_321363_cc.svg" alt=""/>
              </span>
              <p>Garderner</p>
            </div>
            <div className="service-single todo-element">
              <span className="img-wrap">
                <img src="./img/noun_321399_cc.svg" alt=""/>
              </span>
              <p>Housekeeper</p>
            </div>
            <div className="service-single todo-element">
              <span className="img-wrap">
                <img src="./img/noun_321395_cc.svg" alt=""/>
              </span>
              <p>Cook</p>
            </div>
          </div>
        </div>
        <div className="plumber-task-block plumber select">
          <h1>PLUMBER TASK</h1>
          <div className="select-wrap">
            <span className="todo-element">
              <p>Unblock a toilet</p>
            </span>
            <span className="todo-element">
              <p>Unblock a sink</p>
            </span>
            <span className="todo-element">
              <p>Fix a water leak</p>
            </span>
            <span className="todo-element">
              <p>Install a sink</p>
            </span>
            <span className="todo-element">
              <p>Install a shower</p>
            </span>
            <span className="todo-element">
              <p>Install a toilet</p>
            </span>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const componentsBlock = document.querySelectorAll('.todo-element');
    [].map.call(componentsBlock, function (obj) {
      obj.onclick = function(event) {
        const parent = obj.closest('div.select'),
              children = parent.querySelectorAll('.todo-element'),
              addTaskLine = document.querySelector('.add-task-block'),
              text = obj.querySelector('p').innerText;
        children.forEach(function(item, i, arr) {
          if (hasClass(item, 'active')) {
            removeClass(item, 'active')
          }
        });
        addClass(obj, 'active');
        if (hasClass(parent, 'service')) {
          addTaskLine.querySelector('.service-type').innerText = text
        } else {
          addTaskLine.querySelector('.plumber-task').innerText = text
        }
      }
    })

    /* Helpful functions */

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

  handleClick(e) {
    const textBlock = document.querySelector('p.todo-text'),
      text = textBlock.innerText.trim()
    this.props.onAddClick(text);
    textBlock.querySelectorAll('span').forEach(function(item, i, arr) {
      item.innerText = ''
    })
  }
}

function select(state) {
  return {
    blockState: state.newTaskToggle.blockState
  };
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

export default connect(select)(AddTodo)
