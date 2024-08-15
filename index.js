const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square, Rectangle } = require('./lib/shapes');

function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for your logo:',
            validate: input => input.length <= 3 || 'Value must not exceed 3 characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Circle', 'Triangle', 'Square', 'Rectangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
        },
    ])
    .then(answers => {
        let shape;

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

        const svgContent = `
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
                ${shape.render()}
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">
                    ${answers.text}
                </text>
            </svg>
        `;

        fs.writeFile('logo.svg', svgContent.trim(), err => {
            if (err) {
                console.error('Error generating logo.svg:', err);
            } else {
                console.log('Your logo.svg was successfully generated!');
            }
        });
    });
}

promptUser();