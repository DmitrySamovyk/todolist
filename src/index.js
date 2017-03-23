import '../scss/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import App from './Components/App';
import todoApp from './Reducers/Reducers';
import { render } from 'react-dom'
import { loadState, saveState } from './state/localStorage'

const defaultState = loadState();

const Store = createStore(
  todoApp,
  defaultState
);

Store.subscribe(() => {
  saveState(Store.getState());
});

function mapStateToProps(state) {
  return { store: state }
}

export default connect(mapStateToProps)(App)

const rootElement = document.getElementById('root');

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  rootElement
);
