class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }

  hit() {
    this.hitCount++;
  }

  isSunk() {
    if (this.length == this.hitCount) {
      this.sunk = true;
    } else {
      this.sunk = false;
    }
  }
}

module.exports = Ship;