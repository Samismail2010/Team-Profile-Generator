const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
{
    type: 'input',
    name: 'manager',
    message: 'As a team manager, please provide your full name.',
        validate: managerInput => {
        if (managerInput) {
        return true;
        } else {
        console.log('Invalid response. please provide yout full name.')
        return false;
        }
    }
},
{
    type: 'input',
    name: 'id',
    message: 'Please provide your employee ID number',
    validate: idInput => {
        if (idInput) {
        return true;
        } else {
        console.log('Invalid number entered, please provide your employee ID number')
        return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Please provide your email address.',
    validate: emailInput => {
        if (emailInput) {
         return true;
        } else {
        console.log('Invalid email address, please provide email address.')
        return false;
        }
     }
},
{
    type: 'input',
    name: 'office',
    message: 'Please provide your office number.',
    validate: officeInput => {
        if (officeInput) {
        return true;
        } else {
        console.log('Invalid office number, please provide yout office number.')
        return false;
        }
    }
},
{
    type: 'list',
    name: 'option',
    message: 'Would you like to add an engineer or intern for your project?',
    choices: ['Add an engineer', 'Add an intern', 'Team is complete']
        }
    ]);
};
























//Function Call to initialize app
promptUser()
const pageHTML = generatePage;

fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw new Error(err);

    console.log('Page has been created! Go to index.html where you will directed to your team.')
});