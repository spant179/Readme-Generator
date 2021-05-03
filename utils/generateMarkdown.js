function getLicenseBadge(userInput){
    if (userInput.license === 'MIT License') {
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (userInput.license === 'GNU GPL v3') {
        badge = `[![License: GPL v3](hdttps://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (userInput.license === 'Apache License') {
        badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else { badge = '' };
    return badge;
}

function generateMarkdown(userInput){

    return `${getLicenseBadge(userInput)}\n

# ${userInput.title}
## Description
${userInput.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Credits](#credits)
* [License](#license)


## Installation
${userInput.installation}
## Usage
${userInput.usage}
## Contributing Guidelines
${userInput.contribute}
## License
${userInput.license}
## Tests
${userInput.test}

## Questions
GitHub: [${userInput.username}](https://github.com/${userInput.username})
Email: [${userInput.email}](https://${userInput.email}) 

    `;
}

module.exports = generateMarkdown;