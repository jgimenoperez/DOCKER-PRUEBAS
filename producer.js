var zmq = require('./node_modules/zeromq');
var sock = zmq.socket('push');

sock.bindSync('tcp://10.1.0.101:3000');
console.log('Producer bound to port 3000');

setInterval(function(){
  console.log('sending work 13');
  sock.send('some work 13');
}, 500);

// WORKERS----->conecta con----->PRODUCERSF
//console.log('tcp://' + process.env.ipworker +':3000');
//sock.bindSync('tcp://10.1.0.100:3000');