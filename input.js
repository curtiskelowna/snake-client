const { moveKeys } = require("./constants");
const { messagingKeys } = require("./constants");

const handleUserInput = function(key) {
  const keys = Object.keys(moveKeys);
  const msgKeys = Object.keys(messagingKeys);
  if (keys.includes(key)) {
    connection.write(moveKeys[key]);
  }
  if (msgKeys.includes(key)) {
    connection.write(messagingKeys[key]);
  }
  if (key === "\u0003") {
    process.exit();
  }
};

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };