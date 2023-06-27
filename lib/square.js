//class Square {
    //constructor(color) {
      //this.color = color;
      //this.width = 200;
      //this.height = 200;
      //this.x = 50;
      //this.y = 50;
    //}
  
    //setColor(color) {
      //this.color = color;
    //}
  
    //render() {
      //return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    //}

    //addText(svg, text, color) {
      //const fontSize = 50;
      //const textX = this.x + (this.size / 2);
      //const textY = this.y + (this.size / 2) + (fontSize / 3);
      //const textAnchor = 'middle';
  
      //return svg + `<text x="${textX}" y="${textY}" fill="${color}" font-size="${fontSize}" text-anchor="${textAnchor}">${text}</text>`;
    //}
  //}
  class Square {
    constructor(color) {
      this.color = color;
      this.x = 50;
      this.y = 50;
      this.width = 100;
      this.height = 100;
      this.centerX = 100;
      this.centerY = 120;
    }
  
    addText(svg, text, textColor) {
      const fontSize = 50;
      const x = this.centerX;
      const y = this.centerY;
      const textNode = `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fontSize}" fill="${textColor}">${text}</text>`;
      return svg.replace('</svg>', `${textNode}</svg>`);
    }
  
    render() {
      const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <rect 
          x="${this.x}" 
          y="${this.y}" 
          width="${this.width}" 
          height="${this.height}" 
          fill="${this.color}" />
      </svg>`;
      return svg;
    }
  }
  
  module.exports = Square;