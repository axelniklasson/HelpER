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

exports.requestPrediction = function() {
  return new Promise(function(resolve, reject) {
    var options = {
      method: 'POST',
      uri: baseUrl,
      body: {
        some: 'payload'
      },
      json: true // Automatically stringifies the body to JSON
    };

    rp(options)
      .then(function (parsedBody) {
        resolve(parsedBody);
      })
      .catch(function (err) {
        console.log('Post failed, returning');
        return;
      });
  })
}
