import React, { Component } from 'react';

import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import { HomePage } from './screens/HomePage/index';

import './App.scss';

class App extends Component {
  render() {
    return [
      <Header key={0} />,
      <div key={1} className="App container-fluid">
        <HomePage />
      </div>,
      <Footer key={2} />
    ];
  }
}

export default App;
