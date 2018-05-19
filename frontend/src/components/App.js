import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import Header from './Header';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Footer from './Footer';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props); 

    // root state
    this.state = {
      injury: {
        category: -1,
        pain: -1
      },
      location: {
        lat: -1,
        lon: -1
      },
      suggestions: [],
      selectedER: -1
    };
  }

  categoryClicked = (id) => {
    this.setState({ injury: { ...this.state.injury, category: id } });
    this.props.history.push('/view2');
  }

  render() {
    return (
      <div className="app">
        <Header />
        <p>{this.state.injury.category}</p>
        <div className="main">
          <Route exact path="/" render={() => <Component1 onClick={this.categoryClicked} />} />
          <Route exact path="/view2" render={() => <Component2 />} />
          <Route exact path="/view3" render={() => <Component3 />} />
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

export default withRouter(App);
