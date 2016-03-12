
// This script will send you an email when the motion sensor is activated.
// Led light will also be turned on. Enjoy
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }

var Gpio = require('onoff').Gpio,
  led = new Gpio(14, 'out'), //may need to change number
  button = new Gpio(4, 'in', 'both'); //may need to change number
  email = 'testemail@gmail.com'; //enter your email here.

function exit() {
  led.unexport();
  button.unexport();
  process.exit();
}

function stringy(email) {
  var time = new Date;
  var date = time.toLocaleDateString();
  var hour = time.toLocaleTimeString();
  var str = "echo 'There is an intruder at " +
  date + " " + hour + "' | mail -s '108min' " + email;
  return str;
}
button.watch(function (err, value) {
  if (err) {
    throw err;
  }
  led.writeSync(value);
  if (value === 1) {
    console.log('THERES AN INTRUDER!!!!');
  }
});

process.on('SIGINT', exit);
