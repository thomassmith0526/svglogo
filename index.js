const inquirer = require('inquirer');
const fs = require('fs')

// Function to generate SVG code based on user input
function generateSVG(shapeType, text, shapeColor, textColor) {
    // Construct SVG code based on user input
    let svgCodeShape;

    switch (shapeType) {
        case 'circle':
            svgCodeShape = `
                <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle r="95" cx="100" cy="100" fill="${shapeColor}" />
                    <text x="100" y="100" fill="${textColor}" text-anchor="middle">${text}</text>
                </svg>
            `;
            break;
        case 'square':
            svgCodeShape = `
                <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" x="50" y="50" rx="0" ry="0" fill="${shapeColor}" />
                    <text x="150" y="150" fill="${textColor}" text-anchor="middle">${text}</text>
                </svg>
            `;
            break;
        case 'triangle':
            svgCodeShape = `
                <svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="100,10 150,190 50,190" style="fill:${shapeColor};stroke:${shapeColor};stroke-width:3" />
                    <text x="100" y="100" fill="${textColor}" text-anchor="middle">${text}</text>
                </svg>
            `;
            break;
        default:
            svgCodeShape = '';
            break;
    }

    return svgCodeShape;
}

// Inquirer prompt to collect user input
inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Enter the shape',
        choices: [
            "circle",
            "triangle",
            "square",
        ]
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text to display: (no more than 3 letters)'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:'
    }
]).then(answers => {
    // Generate SVG code based on user input
    const svgCode = generateSVG(answers.shape, answers.text, answers.shapeColor, answers.textColor);

    // Write SVG code to a file
    fs.writeFileSync('output.svg', svgCode);
    console.log('SVG file generated successfully!');
});
module.exports = generateSVG




