import React, { Component } from 'react';

import Feet from '../res/png/feet.png';

import './Component1.scss';

class Component1 extends Component {
  render() {
    return (
      <div className="injury-buttons-wrapper">
        <div className="injury-button">
          <div>
            <img src={Feet} alt="feet" />
            <span>Feet</span>
          </div>
        </div>
        <div className="injury-button">
          <div>
            <img src={Feet} alt="feet" />
            <span>Feet</span>
          </div>
        </div>
        <div className="injury-button">
          <div>
            <img src={Feet} alt="feet" />
            <span>Feet</span>
          </div>
        </div>
        <div className="injury-button">
          <div>
            <img src={Feet} alt="feet" />
            <span>Feet</span>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Component1;
