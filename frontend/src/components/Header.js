import React, { Component } from 'react';
import Logo from '../res/logo.png';

import './Header.scss';

class Header extends Component {
  showBack() {
    //return this.props.path !== '/';
    return false;
  }

  showHelp() {
    return false;
  }

  render() {
    return (
      <div className="page-header">
        {this.showBack() &&
        <button className="header-button" onClick={this.props.onBack}>
          <i className="material-icons">arrow_back</i>
        </button>}
        <div className="text-center">
          <div className="header-logo">
            <img src={Logo} alt="logo"></img>
            <div>HelpER</div>
          </div>
        </div>
        {this.showHelp() &&
        <button onClick={this.props.toggleHelp} className="header-button">
          <i className="material-icons text">?</i>
        </button>}
      </div>
    ); 
  }
}

export default Header;
