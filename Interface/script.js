import Ship from "../Ship/ship.js";
import Gameboard from "../Gameboard/gameboard.js";
import Player from "../Player/player.js";

let playerOne = new Player("Kevin");
let playerTwo = new Player("CPU");

playerOne.placeShip(new Ship(5), [0, 0]);
playerOne.placeShip(new Ship(4), [1, 5], "vertical");
playerOne.placeShip(new Ship(3), [6, 0]);
playerOne.placeShip(new Ship(3), [8, 5]);
playerOne.placeShip(new Ship(2), [8, 2], "vertical");

playerTwo.placeShip(new Ship(5), [1, 7], "vertical");
playerTwo.placeShip(new Ship(4), [2, 1]);
playerTwo.placeShip(new Ship(3), [6, 6]);
playerTwo.placeShip(new Ship(3), [0, 6]);
playerTwo.placeShip(new Ship(2), [8, 3]);

console.log(playerOne);
console.log(playerTwo);
