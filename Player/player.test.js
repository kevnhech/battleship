const Player = require("./player");
const Gameboard = require("../Gameboard/gameboard");

test("Player has a Gameboard", () => {
  let player = new Player("Kevin");
  expect(player).toEqual({ name: "Kevin", gameboard: new Gameboard() });
});