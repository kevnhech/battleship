class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.missedAttacks = [];
  }

  createBoard() {
    return Array.from({length: 10}, () => Array(10).fill(null));
  }

  placeShip(ship, coordinates, orientation = "horizontal") {
    const [x, y] = coordinates;
    
    for (let i = 0; i < ship.length; i++) {
      let placeX = x;
      let placeY = y;

      if (orientation == "vertical") {
        placeX += i;
      } else {
        placeY += i;
      }

      this.board[placeX][placeY] = ship;
    }
  }

  receiveAttack(coordinates) {
    const [x, y] = coordinates;
    const ship = this.board[x][y];

    if (ship != null) {
      ship.hit();
    }

    this.missedAttacks.push(coordinates);
  }
}

module.exports = Gameboard;
