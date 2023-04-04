// Import necessary classes
const Circle = require('./shapes').Circle;
const Square = require('./shapes').Square;
const Triangle = require('./shapes').Triangle;

//Create a factory function for creating shapes based on usr input
function createShape(shapeType, color) {
    switch(shapeType) {
        case 'circle':
            return new Circle(color)
        case 'square':
            return new Square(color)
        case 'triangle':
            return new Triangle(color);
        default:
            throw new Error('Invalid shape type: ${shapeType}');
    }
}

