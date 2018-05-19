import React, { Component } from 'react';
import classNames from 'classnames';

class Component2 extends Component {
  render() {
    return (
      <div className={classNames(
        'injury-buttons-wrapper', 
        this.props.slide.in ? 'slideIn' : '',
        this.props.slide.out ? 'slideOut' : ''
      )}>
        <h1>Component2</h1>
      </div>
    ); 
  }
}

export default Component2;
