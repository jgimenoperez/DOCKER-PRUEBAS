var zmq = require('./node_modules/zeromq');
var sock = zmq.socket('pull');

//sock.connect('tcp://10.1.0.101:3000');
sock.connect('tcp://' + process.env.ipproducer +':3000');

console.log('Worker connected to port 3000');

sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
}); 

// WORKERS----->conecta con----->PRODUCERS