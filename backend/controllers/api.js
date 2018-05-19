const express   = require('express');
const router    = express.Router();

router.route('/')
  .get(function(req, res, next) {
    res.redirect('/api/v1/status')
  })

router.route('/status')
  .get(function(req, res, next) {
    res.json({'status':'running'})
  })

module.exports = router;
