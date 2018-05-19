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

  renderWaitingTime = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} min`;
    }

    let hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);
    return `${hours} h ${minutes} min`;
  }

  locationHref = (lat, lon) => `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

  render() {
    let { suggestions } = this.props;

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
                  <span>{`Waiting time: ${this.renderWaitingTime(el.waitingTime)}`}</span>
                  <span>{`Queue: ${el.queue || 5} people`}</span>
                  <span>{`Distance: ${Math.round( el.distance * 10 ) / 10} km`}</span>
                </div>
              </div>

              {this.isSelected(el.id) &&
                <div className="selection">
                  <div>{this.selectedCategory.name}</div>
                  <a href={this.locationHref(el.lat, el.long)}>Get directions</a>
                </div>}
            </div>
        ))}
      </div>
      </div>
    ); 
  }
}

export default Component3;
