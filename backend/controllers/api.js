const express   = require('express');
const router    = express.Router();

var calls = 0;

router.use(function (req, res, next) {
  console.log('Time:', Date.now(), ', #', calls, ': ', req.baseUrl);
  calls++;
  next();
})

router.route('/')
  .get(function(req, res, next) {
    res.redirect('/api/v1/status');
  })

router.route('/status')
  .get(function(req, res, next) {
    res.json({'status':'running', 'requests':calls});
  })

module.exports = router;
