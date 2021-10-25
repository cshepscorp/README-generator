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
        name: 'contribution',
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
        name: 'license',
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
    //   {
    //     type: 'checkbox',
    //     name: 'languages',
    //     message: 'What languages did you create this project with? (Check all that apply)',
    //     choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    //   },
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
    ])
  };

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             return console.log(err);
//         }

//         console.log("Your README file (index.html) has been successfully generated!")
//     })
// }

const writeToFile = data => {
    fs.writeFile('./dist/README.md', data, err => {
                if (err) {
                    return console.log(err);
                }
        
                console.log("Your README file (index.html) has been successfully generated!")
            })
};

// // TODO: Create a function to initialize app
questions()
    
    .then(questionData => {
        // finished portfolio data object is returned as questionData
        // and sent into the generatePage() function
        return generatePage(questionData);
    })
    .then(data => {
        return writeToFile(data);
    })


// // Function call to initialize app
//init();

// questions()
//     .then(questionData => {
//     // finished portfolio data object is returned as questionData
//     // and sent into the generatePage() function
//     return generatePage(questionData);
//     })
//     .then(pageHTML => {
//         // pass pageHTML into the newly created writeFile() function,
//         // which returns a Promise
//         // we use return here, so the Promise is returned into the next .then() method
//         return writeFile(pageHTML);
//     });
//     // const pageHTML = generatePage(questionData);

    // fs.writeFile('./index.html', pageHTML, err => {
    //   if (err) throw new Error(err);

    //   console.log('Page created! Check out index.html in this directory to see it!');
    // });
