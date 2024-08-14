const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square, Rectangle} = require('./lib/shapes')

function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            name:'text',
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
        if (answers.text.length > 3) {
            console.log("Value must not exceed 3 characters");
            promptQuestions();
        } else {
            console.log('Your logo.svg was successfully generated!')
        }
        });
}