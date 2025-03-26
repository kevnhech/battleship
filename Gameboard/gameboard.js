class Gameboard {
  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    return Array.from({length: 10}, () => Array(10).fill(null));
  }

  placeShip(ship, coordinates, orientation) {}
}

module.exports = Gameboard;