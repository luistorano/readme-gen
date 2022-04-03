const fs = require('fs');

// Badges Generation 
function createBadge(license) {
  if (license === 'None') {
    return ``
  };
  if (license === 'MIT') {
    return `<img src="https://img.shields.io/github/license/Dapr1nc3/run-buddy?color=Green&label=MIT">`
  };
  if (license === 'GNU') {
    return `<img src="https://img.shields.io/github/license/Dapr1nc3/run-buddy?color=Green&label=GNU">`
  };
  if (license === 'Apache') {
    return `<img src="https://img.shields.io/github/license/Dapr1nc3/run-buddy?color=Green&label=Apache">`
  };
};

// Link Render
function createLink(license) {
  if (license === 'None') {
    return ``
  }
  if (license) {
    return `[${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`
  }
};

function createSection(license) {
  if (license.badges[0] === 'None') {
    return ``
  };
  if (license) {
    return `## License
    
    ${createBadge(license.badges[0])}
    ${createLink(license.badges[0])} 
    
    
    `
  };
};



// TODO: Create a function to generate markdown for README


// Markdown Function
function loadReadme(userInput) {
  return `
  ${createBadge(userInput.badges[0], userInput.name, userInput.project)}
  # ${userInput.project}
  ## Description
  ${userInput.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${userInput.install}
  ## Usage
  ## How To Video Below
  
  
  
  ## Questions
  Email ${userInput.name} to reach out if you have any questions.
  **Email**: ${userInput.email}
  **Github**: [${userInput.name}](https://github.com/${userInput.name})`;
}



module.exports = loadReadme;