import React, { Component } from 'react';
import classNames from 'classnames';

import Ankle from '../res/png/ankle.png';
import Arm from '../res/png/arm.png';
import Feet from '../res/png/feet.png';
import Hand from '../res/png/hand.png';
import Leg from '../res/png/leg.png';
import Nose from '../res/png/nose.png';
import Tongue from '../res/png/tongue.png';

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

  render() {
    return (
      <div className={classNames(
        'injury-buttons-wrapper', 
        this.state.slideIn ? 'slideIn' : '',
        this.state.slideOut ? 'slideOut' : ''
      )}>
        <div className="injury-button">
          <div onClick={() => this.props.onClick(0)}>
            <img src={Ankle} alt="ankle" />
            <span>Ankles</span>
          </div>
        </div>
        <div className="injury-button">
          <div onClick={() => this.props.onClick(1)}>
            <img src={Arm} alt="arm" />
            <span>Arm</span>
          </div>
        </div>
        <div className="injury-button">
          <div onClick={() => this.props.onClick(2)}>
            <img src={Feet} alt="feet" />
            <span>Feet</span>
          </div>
        </div>
        <div className="injury-button">
          <div onClick={() => this.props.onClick(3)}>
            <img src={Hand} alt="hand" />
            <span>Hand</span>
          </div>
        </div>
        <div className="injury-button">
          <div onClick={() => this.props.onClick(4)}>
            <img src={Leg} alt="leg" />
            <span>Leg</span>
          </div>
        </div>
        <div className="injury-button">
          <div onClick={() => this.props.onClick(5)}>
            <img src={Nose} alt="nose" />
            <span>Nose</span>
          </div>
        </div>
        <div className="injury-button">
          <div onClick={() => this.props.onClick(6)}>
            <img src={Tongue} alt="tongue" />
            <span>Tongue</span>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Component1;
