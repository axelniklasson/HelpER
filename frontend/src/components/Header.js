import React, { Component } from 'react';
import Logo from '../res/logo.png';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <div className="page-header">
        <button className="header-button">foo</button>
        <div className="text-center">
          <div className="header-logo">
            <img src={Logo}></img>
            <div>HelpER</div>
          </div>
        </div>
        <button className="header-button">bar</button>
      </div>
    ); 
  }
}

export default Header;
