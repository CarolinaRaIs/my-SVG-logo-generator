class Circle {
    constructor(color) {
      this.color = color;
      //this.radius = 100;
      //this.centerX = 150;
      //this.centerY = 150;
    }

    addText(svg, text, textColor) {
      const style = `style="fill:${this.color};color:${textColor}"`;
      const viewBox = '0 0 100 100';
      return svg ? svg.replace('<svg', `<svg ${style}`) : '';
    }
    //setColor(color) {
    //  this.color = color;
    //}
  
    //render() {
    //  return `<circle cx="${this.centerX}" cy="${this.centerY}" r="${this.radius}" fill="${this.color}" />`;
    //}

    //addText(svg, text, textColor) {
    //  const fontSize = 50;
    //  const x = this.centerX;
    //  const y = this.centerY;
    //  const textNode = `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fontSize}" fill="${textColor}">${text}</text>`;
    //  return svg.replace('</svg>', `${textNode}</svg>`);
    //}
  }
  
module.exports = Circle;