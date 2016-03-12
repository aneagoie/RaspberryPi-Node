// Start your own project today. This API call will send you the current
// astronauts who are in space. Create a project where LEDs are lit up for
// each astronaut in space.

// ASTRO TRACKER
var fetch = require('fetch').fetchUrl;

fetch('http://api.open-notify.org/astros.json', function(err, meta, res){
  console.log(res.toString());
})
