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
const { assertEnumDefaultedMember } = require('@babel/types');

//array of team members
const team = [];

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

//functions to build the team

        //Manager//
function main() {
    inquirer.prompt(managerQst).then(response => {
        const manager = new Manager
        (
            repsonse.name,
            response.Id,
            response.Email,
            response.OfficeNumber,
        )
        team.push(manager)
        addMember()
    })
}

        //Engineer//
function addEngineer() {
    inquirer.prompt(engineerQst)
    .then(response => {
        const engineer = new Engineer(
            repsonse.name,
            response.Id,
            response.Email,
            response.GitHub,
        )
        team.push(engineer)
        addMember()
    })
}
        //Intern//
function addIntern() {
    inquirer.prompt(internQst).then(response => {
        const intern = new Intern
        (
            repsonse.name,
            response.Id,
            response.Email,
            response.School,
        )
        team.push(intern)
        addMember()
    })
}












//import HTML 


//HTML file


//Deploy application




