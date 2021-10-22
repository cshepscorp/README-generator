// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
//const questions = [];
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about your project:',
        validate: aboutInput => {
            if (aboutInput) {
              return true;
            } else {
              console.log('Please enter a project description!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Provide installation instructions for your project:',
        validate: instructionsInput => {
            if (instructionsInput) {
              return true;
            } else {
              console.log('Please enter project installation instructions.');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project:',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please enter project usage information.');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'constribution',
        message: 'Provide contribution guidelines for your project:',
        validate: constributionInput => {
            if (constributionInput) {
              return true;
            } else {
              console.log('Please enter project contribution guidelines.');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for your project:',
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please enter project test instructions.');
              return false;
            }
          }
      },
      {
        type: 'list',
        name: 'licenses',
        message: 'This project is licensed with:',
        choices: ['MIT', 'GPL (GNU)', 'Apache 2.0', 'No license'],
        validate: licenseInput => {
            if (licenseInput) {
              return true;
            } else {
              console.log('Please enter licensing information.');
              return false;
            }
          }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What languages did you create this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email.');
            return false;
          }
        }
      }
    ]);
  };

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

questions();
