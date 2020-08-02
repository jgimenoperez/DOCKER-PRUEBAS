var zmq = require('./node_modules/zeromq');
var sock = zmq.socket('pub');

sock.bindSync('tcp://10.1.0.102:3001');
console.log('Publisher bound to port 3001');

setInterval(function(){
  console.log('sending a multipart message envelope');
  sock.send(['kitty cats', 'meow!']);
}, 500);

//Pubber.js-------subscriber.js 
//(Subscriber queda a la espera de pubber pero con suscripcion