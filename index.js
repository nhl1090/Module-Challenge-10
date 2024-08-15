// Import required modules
const inquirer = require('inquirer'); // Inquirer module for collecting user input
const fs = require('fs'); // File system module for writing the SVG file
const { Circle, Triangle, Square, Rectangle } = require('./lib/shapes'); // Shape classes imported from external file

// Function to prompt user for logo customization options
function promptUser() {
    inquirer.prompt([
        // Prompt for logo text with validation to ensure input is 3 characters or less
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for your logo:',
            validate: input => input.length <= 3 || 'Value must not exceed 3 characters.'
        },
        // Prompt for text color input
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
        },
        // Prompt to choose a shape for the logo
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Circle', 'Triangle', 'Square', 'Rectangle'],
        },
        // Prompt for shape color input
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
        },
    ])
    .then(answers => {
        let shape;

        // Instantiate the selected shape with the user-provided shape color
        switch (answers.shape) {
            case 'Circle':
                shape = new Circle(answers.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(answers.shapeColor);
                break;
            case 'Square':
                shape = new Square(answers.shapeColor);
                break;
            case 'Rectangle':
                shape = new Rectangle(answers.shapeColor);
                break;
        }

        // Generate the SVG content for the logo with the selected shape and text
        const svgContent = `
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                ${shape.render()} <!-- Render the selected shape -->
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">
                    ${answers.text} <!-- Add user-provided text to the logo -->
                </text>
            </svg>
        `;

        // Write the generated SVG content to a file called 'logo.svg'
        fs.writeFile('logo.svg', svgContent.trim(), err => {
            if (err) {
                console.error('Error generating logo.svg:', err); // Log error if file generation fails
            } else {
                console.log('Your logo.svg was successfully generated!'); // Success message
            }
        });
    });
}

// Execute the prompt function to start the process
promptUser();
