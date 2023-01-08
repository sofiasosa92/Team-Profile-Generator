//need for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateTeam = require('./src/template');

console.log("Welcome, please enter your information to the team roster:")


// js lib
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//array of questions input
const newStaff = [];

const questions = async () => {
    const amswers = await inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Email?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            
        }
    ])
}

//classes (manager, engineer, intern)

//output directory

//output file path and name

//import HTML 

//array of team members
const teamMembers = [];

//Team members:


//Types of members:
//Manager input

//Engineer input

//Intern input




//HTML file


//Deploy application



//terminal messages

