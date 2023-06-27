class Triangle {
  constructor(color) {
    this.color = color;
    //this.points = "100,20 40,180 160,180";
    this.points = [
      [150, 18],
      [244, 182],
      [56, 182],
    ];
    this.centerX = 150;
    this.centerY = 130;
    this.fontSize = 50;
  }
  
  addText(svg, text, textColor) {
      
    const fontSize = this.fontSize;
    const x = this.centerX;
    const y = this.centerY + this.fontSize / 2;

    const textNode = `<text x="${x}" y="${y}" text-anchor="middle" font-size="${fontSize}" fill="${textColor}">${text}</text>`;
    return svg.replace('</svg>', `${textNode}</svg>`);
  }
  
  render() {
    const svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <polygon 
        points="${this.points}"
        fill="${this.color}" />
    </svg>`;
    return svg;
  }
}

module.exports = Triangle;