import React, { Component } from 'react';

import './PageCrumbs.scss';

class PageCrumbs extends Component {
  pageNumber() {
    const { path } = this.props;
    let currentStep;
    switch (path) {
      case '/':
        currentStep = 1;
        break;
      case '/view2':
        currentStep = 2;
        break;
      case '/view3':
        currentStep = 3;
        break;
      default:
        currentStep = 1;
    }
    const maxSteps = 3;
    return `${currentStep}/${maxSteps}`;
  }

  render() {
    return (
      <div className="page-crumbs text-center">
        Step {this.pageNumber()}
      </div>
    ); 
  }
}

export default PageCrumbs;
