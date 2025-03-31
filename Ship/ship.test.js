const Ship = require("./ship");

test("Your ships will be objects that include their length, times hit, and sunk", () => {
  let p = new Ship(4);
  p.hit();
  p.hit();
  p.hit();
  p.hit();
  p.isSunk();
  expect(p).toEqual({ length: 4, hitCount: 4, sunk: true });
});
