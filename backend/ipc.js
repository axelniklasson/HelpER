const rp = require('request-promise');
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
