const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // return "connected!" value 
  conn.on("connect", () => console.log("You have connected successfully."))
  // send name to server 
  conn.on("connect", () => conn.write("Name: Zak"))
  // handle incoming data
  conn.on("data", (data) => console.log(data))
  
  return conn;
};

module.exports = {
  connect,
}



