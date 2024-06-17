function generateSVG(shape) {
    let svgCode = '';
  
    switch (shape) {
      case 'Circle':
        svgCode = '<circle cx="50" cy="50" r="40" fill="red" />';
        break;
      case 'Square':
        svgCode = '<rect x="10" y="10" width="80" height="80" fill="blue" />';
        break;
      case 'Triangle':
        svgCode = '<polygon points="50,10 10,90 90,90" fill="green" />';
        break;
      default:
        svgCode = 'Invalid shape selected.';
    }
  
    // Add text element to the SVG
    svgCode += '<text x="50" y="50" fill="white" text-anchor="middle">Hello, SVG!</text>';
  
    return svgCode;
  }
  
  // Main function to run the program
  async function run() {
    const { shape } = await chooseShape();
    const svgCode = generateSVG(shape);
    console.log(svgCode);
  }
  
  // Run the program
  run();