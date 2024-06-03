// These are the required packages used in the creation of the project.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// These are the questions that will prompt the user for inputs when they go to generate a new README.md file
const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
  },
  {
      type: 'input',
      name: 'description',
      message: 'Please provide a brief description of your project:',
  },
  {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for the project? Provide any requiremnts to run it.',
  },
  {
      type: 'input',
      name: 'usage',
      message: 'What are the key functions of your project and what does it accomplish?',
  },
  {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to this project?',
  },
  {
      type: 'input',
      name: 'tests',
      message: 'What are the testing instructions?',
  },
  {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
  },
  {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['None','MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause'],
  },
];

// This function creates and writes the markdown file when it is run
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('Success! Your README.md file has been generated.')
  );
}

// This function Initializes the application when 'node index.js' is called in the commandline
function init() {
  inquirer.prompt(questions)
      .then((responses) => {
          const markdown = generateMarkdown(responses);
          writeToFile('README.md', markdown);
      })
      .catch((error) => {
          console.error('An error has occurred:', error);
      });
}
// Function call to initialize app
init();
