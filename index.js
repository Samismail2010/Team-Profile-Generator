const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const newMemberData = [];

const questions =  async () => {
    const answers = await inquirer.prompt([
{
    type: 'input',
    name: 'name',
    message: 'Please provide your full name.',
        validate: nameInput => {
        if (nameInput) {
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
    type: 'list',
    name: 'role',
    message: 'What is your role?',
    choices: [ 'Manager', 'Engineer', 'Intern'],
},
])

if (answers.role === 'Manager'){
    const managerQues = await inquirer.prompt ([
        {
            type: 'input',
            name: 'office',
            message: "What is your office number?",
        },
    ])
    const addManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        managerQues.office

    );
    newMemberData.push(addManager);

} else if (answers.role ===  'Engineer') {
    const engineerQues = await inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: "What is your Github username?",
        },
    ])
    const addEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        engineerQues.github
    );
    newMemberData.push(addEngineer);

} else if (answers.role === 'Intern'){
    const internQues = await inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: "What school did you attend?",
        },    
    ])
    const addIntern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        internQues.school
    );
    newMemberData.push(addIntern);
}

};

async function promptQuest(){
    await questions()

const addHelp = await inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add another member to your team?',
            choices: ['Add a new member', 'Team is complete'],
        }
    ])
    if (addHelp.addMember === 'Add a new member'){
        return promptQuest()
    }
    return readyTeam();
    }

promptQuest();

function readyTeam(){
    console.log("New Teammate", newMemberData)
    fs.writeFileSync('./output/index.html', generatePage(newMemberData),"utf-8");
};