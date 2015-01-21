var loudness = require('loudness');

module.exports = function(interval) {
  var vol = 0;

  var get = function() {
    loudness.getVolume(function(err, v) {
      vol = v;
    });
  };

  setInterval(get, interval);
  get();

  return function() {
    return vol;
  };
};
