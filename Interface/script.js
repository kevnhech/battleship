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

      if (player.gameboard.board[x][y] != null) {
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
}

renderBoard(playerGrid, playerOne);
renderBoard(oppGrid, playerTwo);
