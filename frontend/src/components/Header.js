import React, { Component } from 'react';
import Logo from '../res/logo.png';

import './Header.scss';

class Header extends Component {
  showBack() {
    const { category } = this.props.injury || {};
    return category !== 0;
  }
  showHelp() {
    return true;
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
        <button className="header-button">
          <i className="material-icons text">?</i>
        </button>}
      </div>
    ); 
  }
}

export default Header;
