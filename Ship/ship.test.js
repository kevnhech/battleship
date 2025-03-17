const Ship = require('./ship');

test('Your ships will be objects that include their length, times hit, and sunk', () => {
  let p = new Ship();
  p.hit();
  p.hit();
  p.hit();
  p.isSunk();
  expect(p).toEqual({ length: 3, hitCount: 3, sunk: true });
});
