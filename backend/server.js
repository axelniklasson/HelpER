const express = require('express');
const fallback = require('express-history-api-fallback');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
	res.json({ hello: 'world' });
});

const root = path.resolve(__dirname, '../frontend/build');

app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.listen(3000, () =>  {
	console.log('HelpER backend running on port 3000');
});
