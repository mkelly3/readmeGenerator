// TODO: Include packages needed for this application
const fs = require("fs");
// const util = require("util");
const inquirer = require("inquirer");
// const generateReadme = require("./utils/generateReadme")
// const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) => {
    console.log(response)
  }
  );


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
