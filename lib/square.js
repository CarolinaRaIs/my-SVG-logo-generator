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

    addText(svg, text, color) {
      const fontSize = 50;
      const textX = this.x + (this.size / 2);
      const textY = this.y + (this.size / 2) + (fontSize / 3);
      const textAnchor = 'middle';
  
      return svg + `<text x="${textX}" y="${textY}" fill="${color}" font-size="${fontSize}" text-anchor="${textAnchor}">${text}</text>`;
    }
  }
  
  module.exports = Square;