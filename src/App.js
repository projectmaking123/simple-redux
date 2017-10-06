import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import './App.css';
import Thing from './Thing';

const initalState = {
  count: 0
};

const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'up':
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case 'down':
      return Object.assign({}, state, {
        count: state.count - 1
      })
    default:
      return state;
  }
}

const store = createStore(counterReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Thing />
        </Provider>
      </div>
    );
  }
}

export default App;
