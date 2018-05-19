const rp      = require('request-promise');
const baseUrl = 'http://localhost:3001'

exports.heartbeat = function() {
  return new Promise(function(resolve, reject) {
    rp(baseUrl)
      .then(function (res) {
        const parsedData = JSON.parse(res);
        resolve(parsedData);
      })
      .catch(function (err) {
        console.log('IPC communication failed')
      })
  })
};

exports.requestPrediction = function(category, pain) {
  return new Promise(function(resolve, reject) {
    var options = {
      method: 'POST',
      uri: baseUrl,
      body: {
        category: category,
        pain: pain
      },
      json: true // Automatically stringifies the body to JSON
    };

    rp(options)
      .then(function (prediction) {
        resolve(prediction);
      })
      .catch(function (err) {
        console.log('Post failed, returning');
        return;
      });
  })
}
