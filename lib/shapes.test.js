const { Circle, Triangle, Square, Rectangle } = require('./shapes');

describe('Shape rendering', () => {

  test('Circle', () => {
    const circle = new Circle('red');
    const expectedSVG = '<circle cx="150" cy="100" r="80" fill="red" />';
    expect(circle.render()).toBe(expectedSVG);
  });

  test('Triangle', () => {
    const triangle = new Triangle('blue');
    const expectedSVG = '<polygon points="150,18 244,182 56,182" fill="blue" />';
    expect(triangle.render()).toBe(expectedSVG);
  });

  test('Square', () => {
    const square = new Square('green');
    const expectedSVG = '<rect x="50" y="50" width="200" height="200" fill="green" />';
    expect(square.render()).toBe(expectedSVG);
  });

  test('Rectangle', () => {
    const rectangle = new Rectangle('yellow');
    const expectedSVG = '<rect x="50" y="50" width="300" height="150" fill="yellow" />';
    expect(rectangle.render()).toBe(expectedSVG);
  });

});
