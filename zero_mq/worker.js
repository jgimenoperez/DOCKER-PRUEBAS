const zmq = require("zeromq")

async function run() {
  const sock = new zmq.Pull
  sock.connect("tcp://192.168.3.41:3000")
  console.log("Worker connected to port 3000")
 
  for await (const [msg] of sock) {
    console.log("work: %s", msg.toString())
  }
}

run()