// TODO: Include packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
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
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
          "Apache",
          "Academic",
          "GNU",
          "ISC",
          "MIT",
          "Mozilla",
          "Open"
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
        type: 'list',
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

  ]

function getLicense(value){
  
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFileAsync(fileName, generateMarkdown(data), function (err) {
    if (err) {
        return console.log(err);
    }
});

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    response = JSON.stringify(data,null, "");
    writeToFile(generateReadme,response);
  })
}

// Function call to initialize app
init();
