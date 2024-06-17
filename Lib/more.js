const inquirer = require('inquirer');
const fs = require('fs')

// Function to generate SVG code based on user input
function generateSVG(shape, text, shapeColor, textColor) {
    // Construct SVG code based on user input
    const svgCodeCircle = `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle r="45" cx="50" cy="50" fill="${shapeColor}" />
            <text x="50" y="50" fill="${textColor}" text-anchor="middle">${text}</text>
        </svg>
    `;
    return svgCodeCircle;
    
}

// Inquirer prompt to collect user input
inquirer.prompt([
    {
        type: 'list',
        name: 'shape',
        message: 'Enter the shape',
        choices: [
            "cricle",
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