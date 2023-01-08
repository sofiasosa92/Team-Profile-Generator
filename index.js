//need for this application
const inquirer = require('inquirer');
const fs = require('fs');

//HTML cards
const managerCard = require('./src/manager.card');
const engineerCard = require('./src/engineer.card');
const internCard = require('./src/intern.card');
const HTML = require('./src/teamHTML');


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
                response.name,
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
                response.name,
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
                response.name,
                response.Id,
                response.Email,
                response.School,
            )
        team.push(intern)
        addMember()
    })
}

//Build the team function//
function teamBuild() {
    console.log(team)
    let cards = ''
    for (i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            cards = cards + managerCard(team[i])
        } else if (team[i].getRole() === 'Engineer') {
            cards = cards + internCard(team[i])
        }
    }
    fs.writeFileSync('./dist/team.html', body(cards))
}

//to add a new team member function//
function addMember() {
    inquirer.prompt([{
        type: 'list',
        message: 'Do you want to add a role?',
        name: 'Roles',
        choices: ['Engineer', 'Intern', 'Create Team'],
    }]).then(response => {
        if (response.Roles === 'Engineer') {
            addEngineer()
        }
        else if (response.Roles === 'Intern') {
            addIntern()
        }
        else {
            teamBuild()
        }
    })
}

main()














//import HTML 


//HTML file


//Deploy application




