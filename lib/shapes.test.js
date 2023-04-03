// Import Triangle class from shapes.js (using require() Node.js function)
const Triangle = require('./shapes').Triangle;

// test = checks whether the render() method of the Triangle class returns the correct SVG string for a blue triangle.
// If the actual output matches the expected output, the test passes. If the actual output does not match the expected output, the test fails.
test('render method should return correct SVG string for blue triangle', () => {
  const triangle = new Triangle();
  triangle.setColor('blue');
  // checks whether the actual output of the triangle.render() method matches the expected output, which is the SVG string representation of a blue triangle with three points at (150, 18), (244, 182), and (56, 182)
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// test = checks whether the render() method of the Circle class returns the correct SVG string for a red circle.
test('render method should return correct SVG string for red circle', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="150" r="100" fill="red" />');
  });

// test = checks whether the render() method of the Square class returns the correct SVG string for a green square.
test('render method should return correct SVG string for green square', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
