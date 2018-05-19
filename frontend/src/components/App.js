import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Footer from './Footer';
import PageCrumbs from './PageCrumbs';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props); 

    // root state
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <PageCrumbs injury="{}" />
          <div className="main">
            <Route exact path="/" component={Component1} />
            <Route path="/view2" component={Component2} />
            <Route path="/view3" component={Component3} />
          </div>
          <Footer className="footer" />
        </div>
      </Router>
    );
  }
}

export default App;
