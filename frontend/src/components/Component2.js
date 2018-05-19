import React, { Component } from 'react';
import classNames from 'classnames';
import './Component2.scss';

class Component2 extends Component {
  constructor() {
    super();
    this.state = { loadingSuggestions: false };
  }
  getColor = (val) => {
    let color = val <= this.props.pain ? 'white' : 'transparent';
    return color;
  }

  onPainDegreeSelection = (pain) => {
    this.setState({ loadingSuggestions: true });
    this.props.onClick(pain);
    const { category, lat, long } = this.props;
    fetch('https://helper.lejonkulan.ninja/api/v1/injury', {
      method: 'POST',
      body: JSON.stringify({ category, pain, lat, long }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(suggestions => this.props.setSuggestions(suggestions))
    .catch(err => this.setState({ loadingSuggestions: false }));
  }

  renderButtons() {
    const labels = { 1: 'Low', 4: 'High' };
    return [1, 2, 3, 4].map(painDegree => (
      <div className="pain-button" key={painDegree}>
        <div style={{ background: this.getColor(painDegree)}}
            onClick={() => this.onPainDegreeSelection(painDegree)}></div>
        {labels[painDegree] &&
        <span>{labels[painDegree]}</span>}
      </div>
    ));
  }

  render() {
    return (
      <div className={classNames(
        this.props.slide.left ? 'slideLeft' : '',
        this.props.slide.right ? 'slideRight' : '',
        this.props.slide.reverse ? 'reverse' : ''
      )}>
        <div className="pain-buttons-wrapper">{this.renderButtons()}</div>
        {this.state.loadingSuggestions &&
          <div className="loader-wrapper text-center">
            <div className="loader"></div>
            <p>Getting suggestions</p>
          </div>
        ||
          <div className="pain-text text-center">
            <span>"How much pain do you have?"</span>
          </div>
        }
     </div>
    ); 
  }
}

export default Component2;
