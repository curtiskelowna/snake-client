const IP = "165.227.47.243";
const PORT = 50541;
const MOVE_UP_KEY = "Move: up";
const MOVE_LEFT_KEY = "Move: left";
const MOVE_DOWN_KEY = "Move: down";
const MOVE_RIGHT_KEY = "Move: right";
const messagingKeys = {
  1: "Say: Sup homies!",
  2: "Say: Good luck!!",
  3: "Say: That was fun!",
  4: "Say: Let's play again!",
};
const moveKeys = {
  w: MOVE_UP_KEY,
  a: MOVE_LEFT_KEY,
  s: MOVE_DOWN_KEY,
  d: MOVE_RIGHT_KEY,
};

module.exports = { IP, PORT, moveKeys, messagingKeys };