var zmq = require('./node_modules/zeromq');
var sock = zmq.socket('sub');

//sock.connect('tcp://10.1.0.102:3001');
sock.connect('tcp://' + process.env.ippubber +':3001');
sock.subscribe('kitty cats');
console.log('Subscriber connected to port 3001');

sock.on('message', function(topic, message) {
  console.log('received a message related to:', topic.toString(), 'containing message:', message.toString());
});


//Pubber.js-------subscriber.js 
//(Subscriber queda a la espera de pubber pero con suscripcion