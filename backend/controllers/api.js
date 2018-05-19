const express   = require('express');
const router    = express.Router();

var calls = 0;

const hospitals = [{
'name':'Sahlgrenska',
'distance':1350,
'waitingTime':47,
'recommended':true
},
{
'name':'Mölndal',
'distance':750,
'waitingTime':35,
'recommended':false
},
{
'name':'Östra Sjukhuset',
'distance':2304,
'waitingTime':102,
'recommended':false
}];

router.use((req, res, next) => {
  console.log('Time:', Date.now(), ', #', calls, ': ', req.baseUrl);
  calls++;
  next();
})

router.route('/')
  .get((req, res, next) => {
    res.redirect('/api/v1/status');
  })

router.route('/status')
  .get((req, res, next) => {
    res.json({'status':'running', 'requests':calls});
  })

router.route('/injuiry')
  .get((req, res, next) => {
    res.status(400).json({'status':'error', 'msg':'You need to POST an injuiry öbject here'});
  })
  .post((req, res, next) => {
    try{
      const category = req.body.category;
      const pain     = req.body.pain;
      const lat      = req.body.lat;
      const long     = req.body.long;
      // PERFORM ACTIONS HERE
      res.json(hospitals);
    } catch(e) {
      res.status(400).json({'status':'error', 'msg':'Invalid input data'});
      return;
    }
  })

module.exports = router;
