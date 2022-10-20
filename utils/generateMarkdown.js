
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  ## ${data.projectTitle}
  <br/>
  ${data.getLicense}
  
  ## Description 
  ${data.descritpion}


  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.getLicense}
  ${data.license}

  ## Contributing

  ${data.contributers}

  ## Tests
  ${data.tests}

  ## Questions

  - Github username: [${data.githubUser}](https://github.com/${data.githubUser})
  - Contact Email: ${data.email}


`;
}

module.exports = generateMarkdown;
