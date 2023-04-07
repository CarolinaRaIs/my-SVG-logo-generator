class Triangle {
    constructor(color) {
      this.color = color;
      this.points = [
        [150, 18],
        [244, 182],
        [56, 182],
      ];
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      const pointsString = this.points.map(([x, y]) => `${x},${y}`).join(' ');
      return `<polygon points="${pointsString}" fill="${this.color}" />`;
    }
  
    addText(svg, text, color) {
      const fontSize = 50;
  
      // Calculate the bounding box of the triangle
      const xValues = this.points.map(point => point[0]);
      const yValues = this.points.map(point => point[1]);
      const x1 = Math.min(...xValues);
      const y1 = Math.min(...yValues);
      const x2 = Math.max(...xValues);
      const y2 = Math.max(...yValues);
      const width = x2 - x1;
      const height = y2 - y1;
  
      // Calculate the position of the text
      const textX = x1 + (width / 2);
      const textY = y1 + (height / 2) + (fontSize / 3);
      const textAnchor = 'middle';
  
      return svg + `<text x="${textX}" y="${textY}" fill="${color}" font-size="${fontSize}" text-anchor="${textAnchor}">${text}</text>`;
    }
  }
  
  module.exports = Triangle;