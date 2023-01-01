
// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

//terminal messages

console.log("Welcome, please enter your information to the team roster:")

//array of questions for employee input
const questions = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "name:",
        }]);
