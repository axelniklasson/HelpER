const express = require('express');
const fallback = require('express-history-api-fallback');
const app = express();

app.get('/', (req, res) => {
	res.json({ hello: 'world' });
});

app.listen(3000, () =>  {
	console.log('HelpER backend running on port 3000');
});
