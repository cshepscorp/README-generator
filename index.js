// TODO: Include packages needed for this application
const fs = require('fs'); 
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown.js');

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
            console.log('Please enter a project title');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide a description of your project (Required):',
        validate: aboutInput => {
            if (aboutInput) {
              return true;
            } else {
              console.log('Please enter a project description');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'Provide installation instructions for your project (Required):',
        validate: instructionsInput => {
            if (instructionsInput) {
              return true;
            } else {
              console.log('Please enter project installation instructions');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for your project (Required):',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please enter project usage information');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines for your project:',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions for your project:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'This project is licensed with (Required):',
        choices: ['MIT', 'GPL (GNU)', 'Apache 2.0', 'No license'],
        validate: licenseInput => {
            if (licenseInput) {
              return true;
            } else {
              console.log('Please enter licensing information');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username');
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
            console.log('Please enter your email address');
            return false;
          }
        }
      }
    ])
  };

const writeToFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
                if (err) {
                    return console.log(err);
                }
        
                console.log("Your README file (/dist/README.md) has been successfully generated!")
            })
};

// initialize app questions
questions()
    
    .then(questionData => {
        // finished portfolio data object is returned as questionData
        // and sent into the generatePage() function
        return generatePage(questionData);
    })
    .then(data => {
        return writeToFile(data);
    })

