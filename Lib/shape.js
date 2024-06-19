class Shape {
  constructor(color, text, textColor) {
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  }
}
class Circle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }

  render() {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle r="95" cx="100" cy="100" fill="${this.color}" />
                    <text x="100" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
  }
}
class Square extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" x="50" y="50" rx="0" ry="0" fill="${this.color}" />
                    <text x="150" y="150" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
  }
}
class Triangle extends Shape {
  constructor(color, text, textColor) {
    super(color, text, textColor);
  }
  render() {
    return `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="100,10 150,190 50,190" style="fill:${this.color};stroke:${this.color};stroke-width:3" />
                    <text x="100" y="100" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
  }
}

module.exports = { Circle, Square, Triangle };
