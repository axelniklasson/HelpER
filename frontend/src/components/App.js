import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

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
      selectedER: 0,
      slide: {
        in: true,
        out: false
      }
    };
  }

  animateForwards() {
    this.setState({ slide: { in: false, out: true } }, () => {
      setTimeout(() => {
        this.setState({ slide: { in: true, out: false } }, () => this.props.history.push('/view2'));
      }, 450); 
    });
  }

  categoryClicked = (id) => {
    this.setState({ injury: { ...this.state.injury, category: id } }, () => this.animateForwards());
  }

  render() {
    return (
      <div className="app">
        <Header injury={this.state.injury}/>
        <PageCrumbs injury={this.state.injury} />
        <div className="main">
          <Route exact path="/" render={() => {
            return <Component1 slide={this.state.slide} onClick={this.categoryClicked} />}
          } />
          <Route path="/view2" render={() => {
            return <Component2 slide={this.state.slide} />}
          } />

          <Route exact path="/view3" render={() => <Component3 />} />
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

export default withRouter(App);
