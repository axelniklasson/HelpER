const express   = require('express');
const router    = express.Router();
const ipc       = require('../ipc');
const distance  = require('../helpers/distance');
var calls = 0;

// hospitals
const hospitals = [{
    'id':0,
    'name':'Sahlgrenska',
    'distance':0,
    'waitingTime':0,
    'queue':0,
    'recommended':false,
    'lat':57.6823672,
    'long':11.9592431
  },
  {
    'id':1,
    'name':'Mölndal',
    'distance':0,
    'waitingTime':0,
    'queue':0,
    'recommended':false,
    'lat':57.6612323,
    'long':12.0101488
  },
  {
    'id':2,
    'name':'Östra Sjukhuset',
    'distance':0,
    'waitingTime':0,
    'queue':0,
    'recommended':false,
    'lat':57.7215131,
    'long':12.0500316
}];

router.use((req, res, next) => {
  console.log('PID:', process.pid, '- Time:', Date.now(), ', #', calls, ': ', req.baseUrl);
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

router.route('/injury')
  .get((req, res, next) => {
    res.status(400).json({'status':'error', 'msg':'Invalid request'});
  })
  .post((req, res, next) => {
    try{
      // extract data
      const category = req.body.category;
      const pain     = req.body.pain;
      const userLat  = req.body.lat;
      const userLong = req.body.long;

      // copy hospitals to a future response
      var response = JSON.parse(JSON.stringify(hospitals));

      // calculate distances
      response[0].distance = distance.getDistanceFromLatLonInKm(userLat, userLong, hospitals[0].lat, hospitals[0].long);
      response[1].distance = distance.getDistanceFromLatLonInKm(userLat, userLong, hospitals[1].lat, hospitals[1].long);
      response[2].distance = distance.getDistanceFromLatLonInKm(userLat, userLong, hospitals[2].lat, hospitals[2].long);

      // send category and pain to prediction
      // TODO: INSERT WAITING TIMES AND RECOMMENDATION INTO OBJECT
      ipc.requestPrediction(category, pain).then(function(prediction) {
        res.json(response);
      })
    } catch(e) {
      res.status(400).json({'status':'error', 'msg':'Invalid input data'});
      return;
    }
  })

module.exports = router;
