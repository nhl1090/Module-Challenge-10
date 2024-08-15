// Base Shape class that stores the color property
class Shape {
  constructor(color) {
    this.color = color; // Set the color of the shape
  }
}

// Circle class that extends Shape and renders an SVG circle element
class Circle extends Shape {
  render() {
    // Create an SVG circle element with the specified color
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

// Triangle class that extends Shape and renders an SVG polygon element for a triangle
class Triangle extends Shape {
  render() {
    // Create an SVG triangle element using polygon with the specified color
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

// Square class that extends Shape and renders an SVG rectangle element for a square
class Square extends Shape {
  render() {
    // Create an SVG square element with equal width and height with the specified color
    return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
  }
}

// Rectangle class that extends Shape and renders an SVG rectangle element
class Rectangle extends Shape {
  render() {
    // Create an SVG rectangle element with a different width and height with the specified color
    return `<rect x="50" y="50" width="300" height="150" fill="${this.color}" />`;
  }
}

// Export the shape classes for use in other files
module.exports = { Circle, Triangle, Square, Rectangle };
