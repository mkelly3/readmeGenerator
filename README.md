## README Generator

## Description 
  A high quality README is an important part of a developers GitHub because it provides other developers information about the application. Aspects of a high quality README include the project title, a brief descritpion, usage, license, license badge icon, installation, table of contents, tests, contributing and contact information. Therefore, I created a command line application that allows the user to dynamically generate a high quality readme by answering a few questions. 

## Table of Contents
- [Description](#description)
- [Video](#walk-through-video)
- [Code Snippet](#code-snippet)
- [Technologies Used](#technologies-used)
- [Installation](#instalation)
- [Contact Information](#contact-information)


## Walk Through Video 
[Walk Through Video](https://drive.google.com/file/d/1D2ZTElEXfod2lWHqoyS_T5UpQBUxTkdo/view)

## Code Snippet
This function uses the inqurier prompt method to prompt the user to answer questions in the command line. Within the .then function the inputted answers are used to call another function writeToFile. The writeToFile function dynamically writes the provided data in a newReadMe. 

```
function init() {
  inquirer.prompt(questions).then((data) => {
    data.getLicense = getLicense(data.license);
    writeToFile("./utils/newREADME.md",data);
  });
}

```



## Technologies Used
- JavaScript
- Node.Js

## Instalation
- npm init
- npm inquirer
- npm util

## Contact Information 
- [GitHub](https://github.com/mkelly3/)
- [Linkedin](https://www.linkedin.com/in/morgan-kelly15/)


  