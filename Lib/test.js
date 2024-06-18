const generateSVG = require('../index')

describe('generateSVG', () => {
    test('should return the correct SVG code for a shape with a color fill and a text in the middle of the shpae with a text color', () => {
        const shapeType ='circle';
        const text = 'SVG';
        const shapeColor = 'green';
        const textColor = 'white';

        let expectedSVGCode;
        switch (shapeType) {
            case "circle":
              svgCodeShape = `  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                            <circle r="45" cx="50" cy="50" fill="${shapeColor}" />
                            <text x="50" y="50" fill="${textColor}" text-anchor="middle">${text}</text>
                        </svg>`;
              break;
            case "square":
              svgCodeShape = `   <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                            <rect width="200" height="200" x="50" y="50" rx="0" ry="0" fill="${shapeColor}" />
                            <text x="150" y="150" fill="${textColor}" text-anchor="middle">${text}</text>
                        </svg>`;
              break;
            case "triangle":
              svgCodeShape = `   <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="100,10 150,190 50,190" style="fill:${shapeColor};stroke:purple;stroke-width:3" />
                            <text x="100" y="100" fill="${textColor}" text-anchor="middle">${text}</text>
                        </svg>`;
          }
        

        const generatedSVGCode = generateSVG();
        expect(generatedSVGCode).toEqual(expectedSVGCode);
    })

})