var config = require('./config');

var weather = require('./weather')(config.where, 1000 * 60 * 5);
var volume = require('./volume')(500);
var battery = require('./battery')(1000 * 30);

function space(n) {
  var str = "";
  for (var i=0; i < n; i++) {
    str += " ";
  }
  return str;
}

setInterval(function() {
  process.stdout.write("%{r}" + (new Date()).toString());
  process.stdout.write("%{l}");

  process.stdout.write("LOCATION: ");
  process.stdout.write(config.where);
  process.stdout.write(space(4));

  process.stdout.write("WEATHER: ");
  process.stdout.write(weather() + "C");
  process.stdout.write(space(4));

  process.stdout.write("VOLUME: ");
  process.stdout.write(volume() + "%%");
  process.stdout.write(space(4));

  process.stdout.write("BATTERY: ");
  process.stdout.write(battery().percent + "%% (" + battery().status + ")");
  process.stdout.write(space(4));

  console.log();
}, config.redrawInterval);

