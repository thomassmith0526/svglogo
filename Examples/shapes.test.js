const { Circle, Square, Triangle } = require("../Lib/shape.js");

describe("GenerateSVG", () => {
  describe("generate circle", () => {
    it("should pass if there is a color picked for the fill of the shape", () => {
      const data =`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle r="95" cx="100" cy="100" fill="green" />
                    <text x="100" y="100" fill="white" text-anchor="middle">svg</text>
                </svg>`;
      const circle = new Circle("green", "svg", "white");
      expect(circle.render()).toBe(data);
    });
    it("will recive a shape color", () => {
      const shapeColor = "blue";
      const circle = new Circle(shapeColor);
      expect(circle.color).toBe(shapeColor);
    });

    it("will recive a text", () => {
      const text = "svg";
      const circle = new Circle(text);
      expect(circle.text).toBe(text);
    });

    it("the text will recive a color", () => {
      const textColor = "white";
      const circle = new Circle(textColor);
      expect(circle.textColor).toBe(textColor);
    });
    
  });
  describe("generate square", () => {
    it("should pass if there is a color picked for the fill of the shape", () => {
      const data =`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" x="50" y="50" rx="0" ry="0" fill="green" />
                    <text x="150" y="150" fill="white" text-anchor="middle">svg</text>
                </svg>`;
      const square = new Square("green", "svg", "white");
      expect(square.render()).toBe(data);
    });
  });
  describe("generate triangle", () => {
    it("should pass if there is a color picked for the fill of the shape", () => {
      const data = `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="100,10 150,190 50,190" style="fill:green;stroke:green;stroke-width:3" />
                    <text x="100" y="100" fill="white" text-anchor="middle">svg</text>
                </svg>`;
      const triangle = new Triangle("green", "svg", "white");
      expect(triangle.render()).toBe(data);
    });
  });
});
