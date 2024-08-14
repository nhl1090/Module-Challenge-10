const getRectangleArea = require('./shapes');

test('calculates the area of a rectangle with width 3 and height 4', () => {
  expect(getRectangleArea(3, 4)).toBe(12);
});
