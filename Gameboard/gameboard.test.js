const Gameboard = require('./gameboard');
const Ship = require('../Ship/ship');

test('Create a 10x10 layout', () => {
  let gb = new Gameboard();
  expect(gb.board.length).toBe(10);
  expect(gb.board[0].length).toBe(10);
});

test('Place ships on board', () => {
  let gb = new Gameboard();
  let ship = new Ship(2);
  gb.placeShip(ship, [0, 1]);
  expect(gb.board[0][1]).toBe(ship);
});