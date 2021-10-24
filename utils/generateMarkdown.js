const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  1. [ Description ](#about)
  2. [ Installation ](#installation)
  3. [ Usage ](#usage)
  4. [ License ](#license)
  5. [ Badges ](#badges)
  6. [ Test Instructions ](#test)
  7. [ Contributing ](#contribution)
  8. [ Questions ](#questions)

  <a name="about"></a>
  ## Description
  ${data.about}

  <a name="installation"></a>
  ## Installation
  ${data.instructions}

  <a name="usage"></a>
  ## Usage
  ${data.usage}

  <a name="contribution"></a>
  ## Contributing
  ${data.contribution}

  <a name="test"></a>
  ## Tests
  ${data.test}

  <a name="license"></a>
  ## License
  ${data.licenses}

  <a name="badges"></a>
  ## Badges
  ${data.langauges}

  <a name="questions"></a>
  ## Questions
  Feel free to reach out to me with any additional questions
  * [Find me on GitHub](https://github.com/${data.github}/)
  * Email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
