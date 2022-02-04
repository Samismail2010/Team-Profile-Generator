const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const path = require('path');

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
}
]);
};
const promptQues = employeeData => {
    console.log(`
  =================
  Add New Employee?
  =================
  `);

if (!employeeData.projects) {
    employeeData.projects = [];
  }
  return inquirer
    .prompt([
{
    type: 'confirm',
    name: 'confirmAddProject',
    message: 'Would you like to add an engineer for your project?',
    default: true

},
{
    type: 'input',
    name: 'github',
    message: 'Please provide the engineers Github username.',
    validate: githubInput => {
        if (githubInput) {
        return true;
        } else {
        console.log('Invalid Github username, please provide your github username')
        }return false;
    }
},
{
    type: 'input',
    name: 'engineer',
    message: 'Please provide the engineers full name.',
    validate: engName => {
        if (engName) {
        return true;
        }else{
        console.log('Invalid name entered, please provide your full name.')
        } return false;
    }

},
{
    type: 'input',
    name: 'engineerID',
    message: 'Please provide the engineers ID number.',
    validate: engID => {
        if (engID) {
        return true;
        }else{
        console.log('Invalid employee ID number, please provide your employee ID number.')
        }return false;
    }
},
 {
   type: 'input',
   name: 'engineeremail',
   message: 'Please provide your engineer email address.',
   validate: engEmail => {
       if (engEmail){
       return true;
       }else{
        console.log('Invalid email address, please provide your email address.')
       }return false;
   } 
 },
])
// .then(projectData => {
//     employeeData.projects.push(projectData);
//     if (projectData.confirmAddProject) {
//       return promptQues(employeeData);
//     } else {
//       return employeeData;
//     }
//   });

};
const promptProject = employeeData => {
    console.log(`
  =================
  Need More Hands?
  =================
  `);

if (!employeeData.projects) {
    employeeData.projects = [];
  }
  return inquirer
    .prompt([
{
    type: 'confirm',
    name: 'confirmAddProject',
    message: 'Would you like to add a intern for your project?',
    default: true
},
 {
     type: 'input',
     name: 'internname',
    message: 'Please provide the interns full name.',
    validate: intName => {
        if (intName){
        return true;
        }else{
        console.log('Invalid name entered, please provide your full name.')
        }return false;
    }
 },
 {
     type: 'input',
     name: 'internID',
     message: 'Please provide the interns employee ID number.',
     validate: intID => {
         if (intID){
         return true;
         }else{
         console.log('Invalid employee ID number, please provide your employee ID number.')
         }return false;
     }
 },
 {
     type: 'input',
     name: 'internemail',
     message: 'Please provide the interns email address.',
     validate: intEmail => {
        if (intEmail) {
        return true;
        }else{
        console.log('Invalid email address, please provide your email address.')
        }return false;
    }   
 },
 {
    type: 'input',
    name:'school',
    message: 'Please provide the school the intern attends.',
    validate: intSchool => {
        if (intSchool){
        return true;
        }else{
        console.log('Invalid school entered, please provide the intern school.')
        }return false;
    }
 },

])
// .then(projectData => {
//     employeeData.projects.push(projectData);
//     if (projectData.confirmAddProject) {
//       return promptProject(employeeData);
//     } else {
//       return employeeData;
//     }

//   });
};

promptUser()
  .then(promptQues)
  .then(promptProject)
  .then(employeeData => {
    const pageHTML = generatePage(employeeData);

    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
});
