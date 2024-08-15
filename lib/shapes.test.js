// Import the shape classes from the shapes.js file
const { Circle, Triangle, Square, Rectangle } = require('./shapes');

// Group related tests under the "Shape rendering" describe block
describe('Shape rendering', () => {

  // Test for rendering a Circle with the color red
  test('Circle', () => {
    const circle = new Circle('red'); // Create a Circle instance with color red
    const expectedSVG = '<circle cx="150" cy="100" r="80" fill="red" />'; // Expected SVG output
    expect(circle.render()).toBe(expectedSVG); // Check if the render method produces the expected SVG
  });

  // Test for rendering a Triangle with the color blue
  test('Triangle', () => {
    const triangle = new Triangle('blue'); // Create a Triangle instance with color blue
    const expectedSVG = '<polygon points="150,18 244,182 56,182" fill="blue" />'; // Expected SVG output
    expect(triangle.render()).toBe(expectedSVG); // Check if the render method produces the expected SVG
  });

  // Test for rendering a Square with the color green
  test('Square', () => {
    const square = new Square('green'); // Create a Square instance with color green
    const expectedSVG = '<rect x="50" y="50" width="200" height="200" fill="green" />'; // Expected SVG output
    expect(square.render()).toBe(expectedSVG); // Check if the render method produces the expected SVG
  });

  // Test for rendering a Rectangle with the color yellow
  test('Rectangle', () => {
    const rectangle = new Rectangle('yellow'); // Create a Rectangle instance with color yellow
    const expectedSVG = '<rect x="50" y="50" width="300" height="150" fill="yellow" />'; // Expected SVG output
    expect(rectangle.render()).toBe(expectedSVG); // Check if the render method produces the expected SVG
  });

});
