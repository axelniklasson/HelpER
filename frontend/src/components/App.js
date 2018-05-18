import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Component1} />
          <Route path="/view2" component={Component2} />
          <Route path="/view3" component={Component3} />
        </div>
      </Router>
    );
  }
}

export default App;
