var Forecast = require('forecast');

module.exports = function(loc, interval) {
  var locations = {
    "San Jose": [37.3360,-121.8847]
  };

  var forecast = new Forecast({
    service: 'forecast.io',
    key: '8565a951a591ddd05363e1f81e28de10',
    units: 'celcius',
  });

  var temperature = 0;

  var get = function() {
    forecast.get(locations[loc], function(err, wthr) {
      if(err) return console.dir(err);
      temperature = Math.floor(wthr.currently.temperature);
    });
  };

  setInterval(get, interval);
  get();

  return function() {
    return temperature;
  };
};
