// const Gameboard = require("../Gameboard/gameboard");
import Gameboard from "../Gameboard/gameboard.js";

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard;
  }

  placeShip(ship, coordinates, orientation = "horizontal") {
    this.gameboard.placeShip(ship, coordinates, orientation);
  }
}

// module.exports = Player;
export default Player;
