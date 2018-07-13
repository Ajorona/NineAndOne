import React, { Component } from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import NineAndOne from './containers/NineAndOne/NineAndOne';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NineAndOne />
      </BrowserRouter>
    );
  }
}

export default App;
