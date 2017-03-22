import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { addTodo, actionTodo, removeTodo, setVisibilityFilter, VisibilityFilters } from '../Actions/Actions';
import AddTodo from './AddTodo';
// import Todo from './Todo';
import TodoList from './TodoList';
import Filter from './Filter';

class App extends Component {
  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>

        <TodoList
          todos={visibleTodos}
          onTodoClick={index =>
            dispatch(actionTodo(index))
          } />
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          } />
        {/*<Filter
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          } />*/}
      </div>
    );
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
  case VisibilityFilters.SHOW_ALL:
    return todos;
  case VisibilityFilters.SHOW_COMPLETED:
    return todos.filter(todo => todo.completed);
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(App);
