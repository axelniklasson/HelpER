import React, { Component } from 'react';
import classNames from 'classnames';

class Component3 extends Component {
  render() {
    return (
      <div className={classNames(
        this.props.slide.left ? 'slideLeft' : '',
        this.props.slide.right ? 'slideRight' : ''
      )}>
        <h1>Component3</h1>
      </div>
    ); 
  }
}

export default Component3;
