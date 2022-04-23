const fs = require('fs');

// Badges Generation 
function badgeCreation(license) {
  if (license === 'None') {
    return ``
  };
  if (license === 'MIT') {
    return `<img src="https://img.shields.io/github/license/luistorano/run-buddy?color=Green&label=MIT">`
  };
  if (license === 'GNU') {
    return `<img src="https://img.shields.io/github/license/luistorano/run-buddy?color=Green&label=GNU">`
  };
  if (license === 'Apache') {
    return `<img src="https://img.shields.io/github/license/luistorano/run-buddy?color=Green&label=Apache">`
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
    
    ${badgeCreation(license.badges[0])}
    ${createLink(license.badges[0])} 
    
    
    `
  };
};



// TODO: Create a function to generate markdown for README


// Markdown Function
function pullUpReadme(questionInput) {
  return `
  ${badgeCreation(questionInput.badges[0], questionInput.username, questionInput.projectname)}
  # ${questionInput.projectname}
  ## Description
  ${questionInput.description}
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
  ${questionInput.install}
  ## Usage
  ## How To Video Below
  
  
  
  ## Questions
  Email ${questionInput.useremail} to reach out if you have any questions.
  **Email**: ${questionInput.useremail}
  **Github**: [${questionInput.username}](https://github.com/${questionInput.username})`;
}



module.exports = pullUpReadme;