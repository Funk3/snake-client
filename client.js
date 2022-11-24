const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
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



