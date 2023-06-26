class Circle {
  constructor(color) {
    this.color = color;
    this.radius = 80;
    this.centerX = 100;
    this.centerY = 100;
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
      <circle 
        cx="${this.centerX}" 
        cy="${this.centerY}" 
        r="${this.radius}" 		
        fill="${this.color}" />
    </svg>`;
    return svg;
  }
}

module.exports = Circle;
