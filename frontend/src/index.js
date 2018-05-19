import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.scss'

// Load Roboto typeface
require('typeface-roboto')

ReactDOM.render(
  <MuiThemeProvider>
	<App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
