import React, { Component } from 'react';
import './Component2.scss';

class Component2 extends Component {

  
  render() {
    return (
     <div className="pain-buttons-wrapper"> 
      <div className="pain-button"> 
        <div onClick={() => this.props.onClick(1)}></div>
        <span>Low</span>
      </div>
      <div className="pain-button"> 
        <div onClick={() => this.props.onClick(2)}></div>
      </div>
      <div className="pain-button"> 
        <div onClick={() => this.props.onClick(3)}></div>
      </div>
      <div className="pain-button"> 
        <div onClick={() => this.props.onClick(4)}></div>
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
