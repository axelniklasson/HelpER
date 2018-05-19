import React, { Component } from 'react';
import classNames from 'classnames';

import * as injuryTypes from '../injury-types';

import './Component4.scss';

class Component4 extends Component {

  render() {
    return (
      <div className={classNames(
        'overview-wrapper', 
        this.props.slide.left ? 'slideLeft' : '',
        this.props.slide.right ? 'slideRight' : '',
        this.props.slide.reverse ? 'reverse' : ''
      )}>
      </div>
    ); 
  }
}

export default Component4;
