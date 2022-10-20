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
          "Apache 2.0",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Boost Software 1.0",
          "ISC",
          "MIT",
          "Mozilla",
          "Open",
          "N/A"
      ]
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
  if(value === "Apache 2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(value === "GNU GPLv3"){

    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

  else if(value ==="GNU LGPLv3"){
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";

  }
  else if(value ==="Boost Software 1.0"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

  }
  else if(value === "ISC"){
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

  }
  else if(value ==="MIT"){

    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if(value ==="Mozilla" ){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

  }
  else if(value ==="Open"){
    return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";

  }
  else if(value === "" || value ==="N/A"){
    return;
  }

}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFileAsync(fileName,generateReadme(data), function(err) {
    if (err) {
        return console.log(err);
    }
});

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    data.getLicense = getLicense(data.license);
    writeToFile("./utils/newREADME.md",data);
  });
}

// Function call to initialize app
init();
