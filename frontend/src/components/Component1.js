import React, { Component } from 'react';
import classNames from 'classnames';

import * as injuryTypes from '../injury-types';

import './Component1.scss';

class Component1 extends Component {
  renderButtons() {
    return Object.keys(injuryTypes).map(key => injuryTypes[key])
    .map(({ id, name, alt, icon }) => (
      <div className="injury-button" key={id}>
        <div onClick={() => this.props.onClick(id)}>
          <img src={icon} alt={alt} />
          <span>{name}</span>
        </div>
      </div>
    ));
  }

  render() {
    console.log(this.props);
    return (
      <div className={classNames(
        'injury-buttons-wrapper', 
        this.props.slide.in ? 'slideIn' : '',
        this.props.slide.out ? 'slideOut' : ''
      )}>
        {this.renderButtons()}
      </div>
    ); 
  }
}

export default Component1;
