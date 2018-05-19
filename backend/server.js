const express 		= require('express');
const fallback 		= require('express-history-api-fallback');
const app 				= express();
const path 				= require('path');
const bodyParser 	= require('body-parser');

// Parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Import API
console.log('- Starting API')
const api = require('./controllers/api');
app.use('/api/v1', api);

// Import IPC and check status with the python predictor
console.log('- Starting IPC')
const ipc = require('./ipc');
ipc.heartbeat().then(function(parsedData) {
	console.log('Status IPC:', parsedData.status, 'Port: 3001');
});

// Serve static frontend
console.log('- Starting static serving')
const root = path.resolve(__dirname, '../frontend/build');
app.use(express.static(root));
app.use(fallback('index.html', { root }));

// Start server
app.listen(3000, () =>  {
	console.log('- Starting HTTP server')
	console.log('Status HTTP server: running, Port: 3000');
});
