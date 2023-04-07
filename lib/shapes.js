// Import necessary classes
const Circle = require('./circle');
const Square = require('./square');
const Triangle = require('./triangle');

//Create a factory function for creating shapes based on usr input
function createShape(shapeType, shapeColor) {
    // switch statement evaluates an expression and compares it with multiple cases, and then executes the code associated with the matching case.
    switch(shapeType) {
        case 'circle':
            return new Circle(shapeColor)
        case 'square':
            return new Square(shapeColor)
        case 'triangle':
            return new Triangle(shapeColor);
        default:
            throw new Error(`Invalid shape type: ${shapeType}`);
    }
}

module.exports = createShape;
//module.exports = (shapeType, shapeColor, svg, text, textColor) => {
    //const shape = createShape(shapeType, shapeColor);
    //return shape.addText(svg, text, textColor);
//};
