import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from './Header';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
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
        left: false,
        right: true,
        reverse: false
      },
      position: {
        latitude: 0,
        longitude: 0,
      }
    };
    this.getLocation();
  }

  getLocation() {
    if (!navigator.geolocation) {
      return;
    }
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      console.log('location found');
      this.setState({ position: { latitude, longitude } });
    });
  }

  getPath() {
    return this.props.location.pathname;
  }

  resolveRoute(forwards) {
    const path = this.getPath();
    let route = path;

    switch (path) {
      case '/':
        route = forwards ? '/view2' : '/';
        break;
      case '/view2':
        route = forwards ? '/view3' : '/';
        break;
      case '/view3':
        route = forwards ? '/view3' : '/view2';
        break;
      case '/view4':
        route = forwards ? '/view4' : '/view3';
        break;
      default:
        route = '/';
    }
    return route;
  }

  animate(forwards) {
    this.setState({ slide: { left: false, right: false, reverse: false }}, () => {
      this.setState({ slide: { left: forwards, right: !forwards, reverse: !forwards} }, () => {
        setTimeout(() => {
          this.setState({ slide: { left: !forwards, right: forwards, reverse: !forwards } }, () => {
            let route = this.resolveRoute(forwards);
            this.props.history.push(route);
          });
        }, 450); 
      });
    });
  }

  categoryClicked = (id) => {
    this.setState({ injury: { ...this.state.injury, category: id } }, () => {
      setTimeout(() => {
        this.animate(true);
      }, 500);
    });
  }

  backClicked = () => this.animate(false);

  painClicked = (id) => {
    this.setState({injury: {...this.state.injury, pain: id}});
  }

  setSuggestions = (suggestions) => {
    this.setState({ suggestions });
    setTimeout(() => {
      this.animate(true);
    }, 500);
  }

  render() {
    return (
      <div className="app">
        <Header injury={this.state.injury} path={this.getPath()} onBack={this.backClicked} />
        <PageCrumbs injury={this.state.injury} path={this.getPath()} />
        <div className="main">
          <Route exact path="/" render={() => {
            return <Component1 slide={this.state.slide} injury={this.state.injury} onClick={this.categoryClicked} />}
          } />
          <Route path="/view2" render={() => {
            return <Component2 slide={this.state.slide} pain={this.state.injury.pain} onClick={this.painClicked}
                category={this.state.injury.category}
                lat={this.state.position.latitude}
                long={this.state.position.longitude}
                setSuggestions={this.setSuggestions}
                />}
          } />

          <Route path="/view3" render={() => {
            return <Component3 slide={this.state.slide} suggestions={this.state.suggestions}
                category={this.state.injury.category}
                pain={this.state.injury.pain}
                />}
          } />
          <Route path="/view4" render={() => {
            return <Component4 slide={this.state.slide} />} 
          }/>
        </div>
        <Footer className="footer" />
      </div>
    );
  }
}

export default withRouter(App);
