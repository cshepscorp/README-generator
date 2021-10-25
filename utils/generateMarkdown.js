const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let chosenLicense;
let chosenLicenseInfo;
let chosenLicenseLink;
function renderLicenseBadge(license) {
  if (license === "MIT") {
    chosenLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  if (license === "GPL (GNU)") {
    chosenLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (license === "Apache 2.0") {
    chosenLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "No license") {
    chosenLicense = ` `
  }
  return chosenLicense;
}

renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    chosenLicenseLink = `[Read more about the MIT license](https://choosealicense.com/licenses/mit/)`
  }
  if (license === "GPL (GNU)") {
    chosenLicenseLink = `[Read more about the GPL (GNU) license](https://choosealicense.com/licenses/gpl-3.0/)`
  }
  if (license === "Apache 2.0") {
    chosenLicenseLink = `[Read more about the Apache 2.0 license](https://choosealicense.com/licenses/apache-2.0/)`
  }
  return chosenLicenseLink;
}
renderLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    chosenLicenseInfo = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  if (license === "GPL (GNU)") {
    chosenLicenseInfo = `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  }
  if (license === "Apache 2.0") {
    chosenLicenseInfo = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  return chosenLicenseInfo;
  
}
renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(`${data.license}`);
  const licenseInfo = renderLicenseSection(`${data.license}`);
  const licenseLink = renderLicenseLink(`${data.license}`);
  return `
  
  # ${data.title} ${licenseBadge}

  ## Table of Contents
  * [ Description ](#about)
  * [ Installation ](#installation)
  * [ Usage ](#usage)
  * [ License ](#license)
  * [ Badges ](#badges)
  * [ Test Instructions ](#test)
  * [ Contributing ](#contribution)
  * [ Questions ](#questions)

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
  ${data.license} - ${licenseInfo} (${licenseLink})

  <a name="questions"></a>
  ## Questions
  Feel free to reach out to me with any additional questions
  * [Find me on GitHub](https://github.com/${data.github}/)
  * Email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
