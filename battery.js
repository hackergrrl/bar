var battery = require('battery-info');

module.exports = function(interval) {
  var info = {
  };

  var get = function() {
    battery('BAT0', function(err, i) {
      info.status = i.status;
      info.percent = Math.floor((i.energy_now / i.energy_full) * 100);
    });
  };

  setInterval(get, interval);
  get();

  return function() {
    return info;
  };
};

/*
{ alarm: '0',
  capacity: '33',
  capacity_level: 'Normal',
  cycle_count: '0',
  energy_full: '55940000',
  energy_full_design: '67000000',
  energy_now: '18710000',
  manufacturer: 'SMPNz4515C9DKRNA7123456789ABCDE',
  model_name: 'bq20z4515C9DKRNA7123456789ABCDE',
  power_now: '11892000',
  present: '1',
  serial_number: '',
  status: 'Discharging',
  technology: 'Unknown',
  type: 'Battery',
  uevent: 'POWER_SUPPLY_NAME=BAT0\nPOWER_SUPPLY_STATUS=Discharging\nPOWER_SUPPLY_PRESENT=1\nPOWER_SUPPLY_TECHNOLOGY=Unknown\nPOWER_SUPPLY_CYCLE_COUNT=0\nPOWER_SUPPLY_VOLTAGE_MIN_DESIGN=7500000\nPOWER_SUPPLY_VOLTAGE_NOW=7323000\nPOWER_SUPPLY_POWER_NOW=11892000\nPOWER_SUPPLY_ENERGY_FULL_DESIGN=67000000\nPOWER_SUPPLY_ENERGY_FULL=55940000\nPOWER_SUPPLY_ENERGY_NOW=18710000\nPOWER_SUPPLY_CAPACITY=33\nPOWER_SUPPLY_CAPACITY_LEVEL=Normal\nPOWER_SUPPLY_MODEL_NAME=bq20z4515C9DKRNA7123456789ABCDE\nPOWER_SUPPLY_MANUFACTURER=SMPNz4515C9DKRNA7123456789ABCDE\nPOWER_SUPPLY_SERIAL_NUMBER=\n',
  voltage_min_design: '7500000',
  voltage_now: '7323000',
  power: 
   { async: 'disabled',
     control: 'auto',
     autosuspend_delay_ms: null,
     runtime_active_kids: '0',
     runtime_active_time: '0',
     runtime_enabled: 'disabled',
     runtime_status: 'unsupported',
     runtime_suspended_time: '0',
     runtime_usage: '0' } }
*/
