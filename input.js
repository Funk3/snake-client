let connection;

const handleUserInput = (key) => {
  if (key === "\u0003") {
    console.log("Exiting program");
    process.exit()
  }
  if (key === "w") {
    console.log("Move: up")
  }
  if (key === "a") {
    console.log("Move: left")
  }
  if (key === "s") {
    console.log("Move: down")
  }
  if (key === "d") {
    console.log("Move: right")
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