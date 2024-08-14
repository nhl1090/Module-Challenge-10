const {Circle, Triangle, Square, Rectangle} = require('./shapes');

describe('Shape rendering', () => {

test('Circle', () => {
  const circle = new Circle('red');
  const expectedSVG = '<circle cx="150" cy="100" r="80" fill="red" />'
  expect(circle.render()).toBe(expectedSVG);
});


test('Triangle')

test('Square')

test('Rectangle')

});
