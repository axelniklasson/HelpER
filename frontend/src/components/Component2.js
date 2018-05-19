import React, { Component } from 'react';
import classNames from 'classnames';

class Component2 extends Component {
  render() {
    return (
      <div className={classNames(
        this.props.slide.left ? 'slideLeft' : '',
        this.props.slide.right ? 'slideRight' : ''
      )}>
        <h1>Component2</h1>
      </div>
    ); 
  }
}

export default Component2;
