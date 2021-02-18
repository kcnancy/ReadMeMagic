//generate readme 

function generateReadme(answers) {
  return `
<h1 align="center">${answers.project_title} </h1>
======================================
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
${answers.description}
## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. <br />
[${answers.license}](https://opensource.org/licenses/${answers.license})

## Contributing
${answers.contribution}
## Tests
${answers.test}<br />
<br />

## Questions

Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Email me with any questions: ${answers.email}<br /><br />
    `;
    }
  
   module.exports = generateReadme;