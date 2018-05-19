import React, { Component } from 'react';
import classNames from 'classnames';

import * as injuryTypes from '../injury-types';

import './Component1.scss';

class Component1 extends Component {
  renderButtons() {
    return Object.keys(injuryTypes).map(key => injuryTypes[key])
    .map(({ id, name, alt, icon }) => (
      <div className="injury-button" key={id} style={this.getStyle(id)}>
        <div onClick={() => this.props.onClick(id)}>
          <img src={icon} alt={alt} />
          <span>{name}</span>
        </div>
      </div>
    ));
  }

  getStyle = (id) => {
    const { category } = this.props.injury;
    if (category === 0) return {};

    const style = {
      opacity: this.props.injury.category === id ? '1' : '0.5'
    };   
    return style;
  }

  render() {
    return (
      <div>
        <div
          className={classNames(
          'injury-buttons-wrapper', 
          this.props.slide.left ? 'slideLeft' : '',
          this.props.slide.right ? 'slideRight' : '',
          this.props.slide.reverse ? 'reverse' : ''
        )}>
          <p style={{ textAlign: 'center', flexBasis: '100%' }}>"Where does it hurt?"</p>
          {this.renderButtons()}
        </div>
      </div>
    ); 
  }
}

export default Component1;
