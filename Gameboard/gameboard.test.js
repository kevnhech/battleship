const Gameboard = require('./gameboard');
const Ship = require('../Ship/ship');

test('Create a 10x10 layout', () => {
  let gb = new Gameboard();
  expect(gb.board.length).toBe(10);
  expect(gb.board[0].length).toBe(10);
});

test('Place ships on board horizontally', () => {
  let gb = new Gameboard();
  let ship = new Ship(2);
  gb.placeShip(ship, [0, 1]);
  expect(gb.board[0][1]).toBe(ship);
  expect(gb.board[0][2]).toBe(ship);
});

test('Place ships on board vertically', () => {
  let gb = new Gameboard();
  let ship = new Ship(3);
  gb.placeShip(ship, [0, 9], "vertical");
  expect(gb.board[0][9]).toBe(ship);
  expect(gb.board[1][9]).toBe(ship);
  expect(gb.board[2][9]).toBe(ship);
});