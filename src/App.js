import React, { Component } from 'react';

import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import { HomePage } from './screens/HomePage/index';
// import { Contact } from './screens/Contact/index';
// import { Career } from './screens/Career/index';
// import { JobDetails } from './screens/JobDetails/index';

import './App.scss';

const history = createHistory();

class App extends Component {
  render() {
    return [
      <Header key={1} />,
      <Router history={history} key={0}>
        <div>
          <Switch>
            <Route path="/" component={HomePage}></Route>
            {/* <Route path="/contact" component={Contact}></Route> */}
          </Switch>
        </div>
      </Router>,
      <Footer key={2} />
    ];
  }
}

export default App;
