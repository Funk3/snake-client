let connection;

const handleUserInput = (key) => {
  if (key === "\u0003") {
    console.log("Exiting program");
    process.exit()
  }
  if (key === "w") {
    connection.write("Move: up")
  }
  if (key === "a") {
    connection.write("Move: left")
  }
  if (key === "s") {
    connection.write("Move: down")
  }
  if (key === "d") {
    connection.write("Move: right")
  }
  if (key === "1") {
    connection.write("Say: I like green eggs")
  }
  if (key === "2") {
    connection.write("Say: Dogs are the best")
  }
  if (key === "3") {
    connection.write("Say: You guys are alright")
  }
}
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
   // event listener
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
}