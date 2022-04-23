// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const pullUpReadme = require('./utils/generateMarkdown');
const util = require('util');
const { resolve } = require('path');
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function questionReadme() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectname',
            message: 'Name your project: ',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Github Username: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a Github name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'useremail',
            message: 'Email address: ',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a short description of your project: ',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please give a description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'badges',
            message: 'Select Licenses: ',
            choices: ['MIT','GNU','Apache','None']
        },
        {
            type: 'input',
            name: 'repo',
            message: 'Describe this repo:',
            validate: repoInput => {
                if (repoInput) {
                    return true;
                } else {
                    console.log('Please provide a answer');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Details about contributing to this repo: ',
            validate: runInput => {
                if (runInput) {
                    return true;
                } else {
                    console.log('Please provide a answer');
                    return false;
                }
            }
        },
    ])
}


const makeFile = (generatePage, pullUpReadme) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(`../dist/${pullUpReadme.project}.md`, generatePage, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File was created!'
            })

        })
    })
};

async function init() {
    try {
        const questionInput = await questionReadme();
        const generatePage = pullUpReadme(questionInput);

        return makeFile(generatePage, questionInput);
    } catch (err) {
        console.log(err);
    }
}

init()
