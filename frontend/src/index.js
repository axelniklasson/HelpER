import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.scss'

// Load Roboto typeface
require('typeface-roboto')

ReactDOM.render(
  <MuiThemeProvider>
      <Router>
	<App />
      </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
