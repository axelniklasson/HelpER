import React, { Component } from 'react';
import classNames from 'classnames';

import * as injuryTypes from '../injury-types';

import './Component1.scss';

class Component1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIn: false,
      slideOut: false
    };
  }

  componentDidMount = () => this.setState({ slideIn: true, slideOut: false })
  componentWillUnmount = () => this.setState({ slideIn: false, slideOut: true })

  renderButtons() {
    return Object.keys(injuryTypes).map(key => injuryTypes[key])
    .map(({ id, name, alt, icon }) => (
      <div className="injury-button" key={id}>
        <div>
          <img src={icon} alt={alt} />
          <span>{name}</span>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div className={classNames(
        'injury-buttons-wrapper', 
        this.state.slideIn ? 'slideIn' : '',
        this.state.slideOut ? 'slideOut' : ''
      )}>
        {this.renderButtons()}
      </div>
    ); 
  }
}

export default Component1;
