//need for this application
const inquirer = require('inquirer');
const fs = require('fs');

//HTML cards
const managerCard = require('./src/manager.card');
const engineerCard = require('./src/engineer.card');
const internCard = require('./src/intern.card');
const team = require('./src/teamHTML');


//terminal message
console.log("Welcome, please enter your information to the team roster:")

// employee role libs
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//array of team members
const team = [];

//Function to add role
function addMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'member',
            message: 'Add a role to your team:',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    .then((response) => {
        if (repsonse.teamRole === 'Engineer') {
            engineerQst();
        } else if (response.teamRole === 'Intern') {
            internQst();
        }
    });
}

//specific employee questions
//Manager//
const managerQst = [
    {
        type: 'input',
        name: 'Name',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'Id',
        message: 'Enter you ID:',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your Email:',
    },
    {
        type: 'input',
        name: 'OfficeNumber',
        message: 'Enter your office number:',
    },
];

        //Engineer//
const engineerQst = [
    {
        type: 'input',
        name: 'Name',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'Id',
        message: 'Enter you ID:',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your Email:',
    },
    {
        type: 'github',
        name: 'GitHub',
        message: 'Enter your GitHub username:',
    },
];

        //Intern//
const internQst = [
    {
        type: 'input',
        name: 'Name',
        message: 'Name:',
    },
    {
        type: 'input',
        name: 'Id',
        message: 'Enter you ID:',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Enter your Email:',
    },
    {
        type: 'school',
        name: 'School',
        message: 'Enter your School name:',
    },
];

//functions to add the team
function 

//import HTML 


//HTML file


//Deploy application




