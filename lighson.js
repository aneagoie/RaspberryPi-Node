// LED lights will bling 25 times before going off.
var Gpio = require('onoff').Gpio,
  led1 = new Gpio(16, 'out'),
  led2 = new Gpio(21, 'out'),
  led3 = new Gpio(25, 'out'),
  led4 = new Gpio(13, 'out');

var led = [led1, led2, led3, led4];

function blink(led, count) {
  if (count <= 0) {
    return led.unexport();
  }

  led.read(function (err, value) { // Asynchronous read.
    if (err) {throw err}

    led.write(value ^ 1, function (err) { // Asynchronous write.
      if (err) {throw err}
    });
  });

  setTimeout(function () {
    blink(led, count - 1);
  }, 300);
};

led.forEach(function(value) {
  blink(value, 25);
});


