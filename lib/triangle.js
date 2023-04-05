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
  }
  
  module.exports = Triangle;