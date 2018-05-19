import React, { Component } from 'react';
import classNames from 'classnames';

import Hospital from '../res/png/hospital.png';

import './Component3.scss';

class Component3 extends Component {
  render() {
    const { suggestions } = this.props;

    return (
      <div className={classNames(
        this.props.slide.left ? 'slideLeft' : '',
        this.props.slide.right ? 'slideRight' : ''
      )}>
      <p style={{ textAlign: 'center' }}>Suitable emergency rooms</p>
      <div className="suggestions-wrapper">
        {suggestions.map((el) => (
          <div className="suggestion-item" key={el.id}>
            {(el.recommended || el.id == 0) && <span className="recommended">Recommended</span>}
            <img src={Hospital} alt="hospital" />
            <span className="name">{el.name}</span> 
            <div className="extra-info">
              <span>{`Waiting time: ${el.waitingTime || 30} min`}</span>
              <span>{`Queue: ${el.queue || 5} people`}</span>
              <span>{`Distance: ${Math.round( el.distance * 10 ) / 10} km`}</span>
            </div>
          </div>
        ))} 
      </div>
      </div>
    ); 
  }
}

export default Component3;
