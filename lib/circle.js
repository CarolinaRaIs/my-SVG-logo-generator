class Circle {
    constructor(color) {
      this.color = color;
      this.radius = 100;
      this.centerX = 150;
      this.centerY = 150;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  module.exports = Circle;