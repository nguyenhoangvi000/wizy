import React, { Component } from 'react';

import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
// import { HomePage } from './screens/HomePage/index';
import { Contact } from './screens/Contact/index';

import './App.scss';

const history = createHistory();

class App extends Component {
  render() {
    return [
      <Router history={history} key={0}>
        <div>
          <Header key={1} />,
          <Switch>
            <Route path="/" component={Contact}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
          <Footer key={2} />
        </div>
      </Router>,
    ];
  }
}

export default App;
