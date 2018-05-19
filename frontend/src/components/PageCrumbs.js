import React, { Component } from 'react';

import './PageCrumbs.scss';

class PageCrumbs extends Component {
  pageNumber() {
    const { category, pain } = this.props.injury || {};
    console.log(this.props);
    console.log(category, pain);
    const currentStep = !category ? 1 : !pain ? 2 : 3;
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
