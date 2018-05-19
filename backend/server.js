const express = require('express');
const fallback = require('express-history-api-fallback');
const app = express();
const path = require('path');

// Import API
const api = require('./controllers/api');
app.use('/api/v1', api);

// Serve static frontend
const root = path.resolve(__dirname, '../frontend/build');
app.use(express.static(root));
app.use(fallback('index.html', { root }));

// Start server
app.listen(3000, () =>  {
	console.log('HelpER backend running on port 3000');
});
