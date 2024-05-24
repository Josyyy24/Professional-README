// Packages needed for this application also path to generateMarkdown file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a short description that explains the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide instructions and examples for use of your project.',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Input a license',
        choices: ['MIT', 'GNU GPLv3', 'Apache'],
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Would you like to include other developers to contribute?',
    }
];

// Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile('README.md', data, (err) => {
        err ? console.log(err) : console.log('README file created')
    });
}

// Function to initialize app/Prompt questions
function init() {
    inquirer.prompt(questions).then((data) => {
        const readme = generateMarkdown(data);
        writeToFile('README.md', readme);
    });
}

init();
