import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import classnames from 'classnames';

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
    this.state = {
      injury: {
        category: 0,
        pain: 0
      },
      location: {
        lat: 0,
        lon: 0
      },
      suggestions: [],
      selectedER: 0
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
        <PageCrumbs injury={this.state.injury} />
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
