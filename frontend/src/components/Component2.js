import React, { Component } from 'react';
import classNames from 'classnames';
import './Component2.scss';

class Component2 extends Component {
  getColor = (val) => {
    let color = val == this.props.pain ? 'white' : 'transparent';
    return color;
  }

  render() {
    return (
      <div className={classNames(
        'pain-buttons-wrapper', 
        this.props.slide.left ? 'slideLeft' : '',
        this.props.slide.right ? 'slideRight' : '',
        this.props.slide.reverse ? 'reverse' : ''
      )}>
      <div className="pain-button"> 
        <div style={{ background: this.getColor(1)}} onClick={() => this.props.onClick(1)}></div>
        <span>Low</span>
      </div>
      <div className="pain-button"> 
        <div style={{ background: this.getColor(2)}} onClick={() => this.props.onClick(2)}></div>
      </div>
      <div className="pain-button"> 
        <div style={{ background: this.getColor(3)}} onClick={() => this.props.onClick(3)}></div>
      </div>
      <div className="pain-button"> 
        <div style={{ background: this.getColor(4)}} onClick={() => this.props.onClick(4)}></div>
        <span>High</span>
      </div>
      <div className="pain-text">
        <span>"How much pain do you have?"</span>
      </div>
     </div>
    ); 
  }
}

export default Component2;
