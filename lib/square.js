class Square {
    constructor(color) {
      this.color = color;
      this.width = 200;
      this.height = 200;
      this.x = 50;
      this.y = 50;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
  }
  
  module.exports = Square;