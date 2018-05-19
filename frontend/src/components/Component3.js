import React, { Component } from 'react';
import classNames from 'classnames';
import * as injuryTypes from '../injury-types';

import Hospital from '../res/png/hospital.png';

import './Component3.scss';

class Component3 extends Component {
  constructor() {
    super();
    this.state = {
      selected: null
    };
  }
  isSelected = (id) => {
    return this.state.selected && this.state.selected.id === id;
  }
  itemStyle = (id) => {
    return this.state.selected ? {
      opacity: this.state.selected.id === id ? 1 : 0.5
    } : {};
  }

  selectedCategory = () => Object.keys(injuryTypes)
    .map(key => injuryTypes[key])
    .find(({ id }) => id === this.props.category);

  render() {
    let { suggestions } = this.props;
    // suggestions = [{"id":0,"name":"Sahlgrenska","distance":6501.089809099636,"waitingTime":0,"queue":0,"recommended":false,"lat":57.6823672,"long":11.9592431},{"id":1,"name":"Mölndal","distance":6499.548060698291,"waitingTime":0,"queue":0,"recommended":false,"lat":57.6612323,"long":12.0101488},{"id":2,"name":"Östra Sjukhuset","distance":6506.627070413939,"waitingTime":0,"queue":0,"recommended":false,"lat":57.7215131,"long":12.0500316}];
    return (
      <div className={classNames(
        this.props.slide.left ? 'slideLeft' : '',
        this.props.slide.right ? 'slideRight' : ''
      )}>
      <p style={{ textAlign: 'center' }}>Suitable emergency rooms</p>
      <div className="suggestions-wrapper">
        {suggestions.map((el) => (
            <div className="suggestion-item" key={el.id}
                style={this.itemStyle(el.id)}
                onClick={() => this.setState({ selected: el })}>

              {(el.recommended || el.id == 0) && <span className="recommended">Recommended</span>}

              <div className="suggestion-item-main">
                <img src={Hospital} alt="hospital" />
                <span className="name">{el.name}</span>
                <div className="extra-info">
                  <span>{`Waiting time: ${el.waitingTime || 30} min`}</span>
                  <span>{`Queue: ${el.queue || 5} people`}</span>
                  <span>{`Distance: ${Math.round( el.distance * 10 ) / 10} km`}</span>
                </div>
              </div>

              {this.isSelected(el.id) &&
                <div className="selection">
                  <div>{this.selectedCategory.name}</div>
                  <button>Get directions</button>
                </div>}
            </div>
        ))}
      </div>
      </div>
    ); 
  }
}

export default Component3;
