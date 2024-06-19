const inquirer = require('inquirer');
const fs = require('fs')
const {Circle, Square, Triangle} = require("./Lib/shape")

// Function to generate SVG code based on user input
function GenerateSVG(shapeType, text, shapeColor, textColor) {
    // Construct SVG code based on user input
    let svgCodeShape;

    switch (shapeType) {
        case 'circle':
            svgCodeShape = new Circle(shapeColor, text, textColor);
            break;
        case 'square':
            svgCodeShape = new Square(shapeColor, text, textColor)
          
            break;
        case 'triangle':
            svgCodeShape = new Triangle(shapeColor, text, textColor)
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
    const svgCode = GenerateSVG(answers.shape, answers.text, answers.shapeColor, answers.textColor);

    // Write SVG code to a file
    fs.writeFileSync('output.svg', svgCode.render());
    console.log('SVG file generated successfully!');
});
module.exports = GenerateSVG




