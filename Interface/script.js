import Ship from "../Ship/ship.js";
import Gameboard from "../Gameboard/gameboard.js";
import Player from "../Player/player.js";

// RENDER BOARDS
const playerOne = new Player("Player");
const playerTwo = new Player("Opponent");

function randomPlacements() {
  let success = true;

  for (let i = 1; i < 6; i++) {
    success = true
    do {
      let directions = ["vertical", "horizontal"];
      let binary = Math.floor(Math.random() * 2);
      let randomCoordinate = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      let [x, y] = randomCoordinate;
      let randomDirections = directions[binary];
      try {
        if (i == 1) {
          playerOne.placeShip(new Ship(i + 1), randomCoordinate, randomDirections);
          success = false;
        } else {
          playerOne.placeShip(new Ship(i), randomCoordinate, randomDirections);
          success = false;
        }
      } catch (error) {}
    } while (success);
  }

  for (let i = 1; i < 6; i++) {
    success = true
    do {
      let directions = ["vertical", "horizontal"];
      let binary = Math.floor(Math.random() * 2);
      let randomCoordinate = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      let [x, y] = randomCoordinate;
      let randomDirections = directions[binary];
      try {
        if (i == 1) {
          playerTwo.placeShip(new Ship(i + 1), randomCoordinate, randomDirections);
          success = false;
        } else {
          playerTwo.placeShip(new Ship(i), randomCoordinate, randomDirections);
          success = false;
        }
      } catch (error) {}
    } while (success);
  }
}

randomPlacements();

const playerGrid = document.getElementById("player-grid");
const oppGrid = document.getElementById("opponent-grid");

function renderBoard(grid, player) {
  let col = "ABCDEFGHIJ".split("");
  let row = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let battlefieldTable = document.createElement("table");
  let tableBody = document.createElement("tbody");

  battlefieldTable.setAttribute("class", "battlefield-table");

  for (let x = 0; x < 10; x++) {
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "battlefield-row")
    for(let y = 0; y < 10; y++) {
      let tableData = document.createElement("td");
      let content = document.createElement("div");
      tableData.setAttribute("class", "battlefield-cell")
      content.setAttribute("class", "battlefield-cell-content")

      if (x == 0 && y == 0) {
        let markerCol = document.createElement("div");
        let markerRow = document.createElement("div");
        markerCol.setAttribute("class", "marker marker__col");
        markerRow.setAttribute("class", "marker marker__row");
        markerCol.textContent = col.shift();
        markerRow.textContent = row.shift();
        content.appendChild(markerCol);
        content.appendChild(markerRow);
      } else if (x == 0) {
        let markerCol = document.createElement("div");
        markerCol.setAttribute("class", "marker marker__col");
        markerCol.textContent = col.shift();
        content.appendChild(markerCol);
      } else if (y == 0) {
        let markerRow = document.createElement("div");
        markerRow.setAttribute("class", "marker marker__row");
        markerRow.textContent = row.shift();
        content.appendChild(markerRow);
      }

      if (player.gameboard.board[x][y] != null && player.name != "Opponent") {
        tableData.classList.add("battlefield-cell__busy");
        let shipBox = document.createElement("div");
        shipBox.setAttribute("class", "ship-box");
        content.appendChild(shipBox);
      } else {
        tableData.classList.add("battlefield-cell__empty");
      }

      tableData.appendChild(content);
      tableRow.appendChild(tableData);
    }
    tableBody.appendChild(tableRow);
  }

  battlefieldTable.appendChild(tableBody);
  grid.appendChild(battlefieldTable);
  let battlefieldLabel = document.createElement("div");
  battlefieldLabel.setAttribute("class", "battlefield-label");
  battlefieldLabel.textContent = `${player.name}'s grid`;
  grid.appendChild(battlefieldLabel);
}

renderBoard(playerGrid, playerOne);
renderBoard(oppGrid, playerTwo);

// EVENT LISTENERS
function touchBoard() {
  for (let x = 0; x < 10; x++) {
    let row = oppGrid.querySelectorAll(".battlefield-row")[x];
    for (let y = 0; y < 10; y++) {
      let cell = row.querySelectorAll(".battlefield-cell")[y];
      let cellContent = cell.querySelector(".battlefield-cell-content");
      let span = document.createElement("span");
      span.setAttribute("class", "z");
      let oppBoard = playerTwo.gameboard;
      let oppShip = playerTwo.gameboard.board[x][y];
      cell.addEventListener("click", () => {
        oppBoard.receiveAttack([x, y]);
        if (oppShip == null) {
          cell.classList.remove("battlefield-cell__empty");
          cell.classList.add("battlefield-cell__miss");
        } else {
          cell.classList.remove("battlefield-cell__empty");
          cell.classList.add("battlefield-cell__hit");
          oppShip.isSunk();
        }
        cellContent.appendChild(span);

        if (playerTwo.gameboard.allShipsSunk()) {
          alert("You win!");
          oppGrid.querySelectorAll(".battlefield-cell__empty").forEach((cell) => cell.classList.remove("battlefield-cell__empty"));
          let newOppGrid = oppGrid.cloneNode(true);
          oppGrid.parentNode.replaceChild(newOppGrid, oppGrid);
        } else {
          computerTurn();
        }
      }, { once: true });
    }
  }
}
touchBoard();

// COMPUTER RANDOM PLAYS
function computerTurn() {
  let playerBoard = playerOne.gameboard;
  let randomCoordinate = null;
  let moves = playerOne.gameboard.hitAttacks.concat(playerBoard.missedAttacks);

  do {
    randomCoordinate = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  } while (moves.some((arr) => JSON.stringify(arr) == JSON.stringify(randomCoordinate)));

  playerBoard.receiveAttack(randomCoordinate);
  let [x, y] = randomCoordinate;
  let row = playerGrid.querySelectorAll(".battlefield-row")[x];
  let cell = row.querySelectorAll(".battlefield-cell")[y];
  let cellContent = cell.querySelector(".battlefield-cell-content");
  let span = document.createElement("span");
  span.setAttribute("class", "z");

  let playerShip = playerBoard.board[x][y];
  if (playerShip == null) {
    cell.classList.remove("battlefield-cell__empty");
    cell.classList.add("battlefield-cell__miss");
  } else {
    cell.classList.remove("battlefield-cell__busy");
    cell.classList.add("battlefield-cell__hit");
    playerShip.isSunk();
  }
  cellContent.appendChild(span);
  if (playerOne.gameboard.allShipsSunk()) {
    alert("You lose!");
    oppGrid.querySelectorAll(".battlefield-cell__empty").forEach((cell) => cell.classList.remove("battlefield-cell__empty"));
    let newOppGrid = oppGrid.cloneNode(true);
    oppGrid.parentNode.replaceChild(newOppGrid, oppGrid);
  }
}

const randomButton = document.querySelector(".btn-primary");
randomButton.addEventListener("click", () => {
  window.location.reload();
});