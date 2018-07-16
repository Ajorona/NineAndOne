import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import NineAndOne from './containers/NineAndOne/NineAndOne';

import rootReducer from './reducers'
import './App.css';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
          <BrowserRouter>
                <NineAndOne />
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
