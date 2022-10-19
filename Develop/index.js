// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input

function promptUser(){
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Write a brief description of your product',
      name: 'descritpion',
    },
    {
      type: 'input',
      message: 'What is the project used for?',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter the licesne for thie project',
        name: 'license',
      },
      {
        type: 'input',
        message: 'Who are the contributers for this project?',
        name: 'contributers',
      },
      {
        type: 'input',
        message: 'Enter information regarding how to install this project',
        name: 'install',
      },
      {
        type: 'checkbox',
        message: 'What badges would you like to display?',
        name: 'badges',
        choices: [
            "Language Count",
            "Top Language",
            "Code Size",
            "Repo Size",
            "Issues",
            "Issues Closed",
            "Release Version by Date",
        ]
      },
      {
        type: 'input',
        message: 'Please enter a Table of Contents',
        name: 'table',
      },
      {
        type: 'input',
        message: 'Expalin your testing methods and instructions on how to run them',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Please enter your Github Username',
        name: 'githubUser',
      },  
      {
        type: 'input',
        message: 'Please enter your email',
        name: 'email',
      }  

  ])
  .then((response) => {
    console.log(response)
  }
  );

}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
