
// Function that returns a license badge based on which license is passed in
// If there is no license, it will return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
  return '';
}

// Function that returns the license link
// If there is no license, it will return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// This function will return the license section of README
// If there is no license, it will return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License\n\nThis project is licensed under the ${license} license.`;
  }
  return '';
}

// This function will generate the README layout and fill it with the user input data to fill out the README
function generateMarkdown(data) {
  return `# ${data.title}


${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).

${renderLicenseSection(data.license)}
`;
}
// This exports this file so that the index.js file can read and access this file.
module.exports = generateMarkdown;