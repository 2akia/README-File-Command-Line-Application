const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of the project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe the installation process:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions for use:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'ISC', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Explain how others can contribute to your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions for running tests:',
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },

];

// function to write README file
function writeToFile(fileName, data) {
  const fs = require('fs');
  const path = require('path');
  const outputPath = path.join(process.cwd(), fileName);
  fs.writeFileSync(outputPath, data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('Sample-README.md', readmeContent);
    console.log('Sample-README.md successfully created!');
  });
}

// function call to initialize program
init();
