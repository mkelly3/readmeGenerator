
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # Project Title
  ${data.title}
  ${data.getLicense}

  # Table of Contents
  * [Installation](#-Installation)
  * [Usage](#-Usage)
  * [License](#-Installation)
  * [Contributing](#-Contributing)
  * [Tests](#-Tests)
  * [Questions](#-Contact-Information)

  # Installation
  ${data.instalation}

  # Usage
  ${data.usage}

  # License
  ${data.license}

  # Contributing

  ${data.contributing}

  # Tests
  ${data.tests}

  # Contact Information

  * Github username: ${data.githubUser}
  * Contact Email: ${data.email}


`;
}

module.exports = generateMarkdown;
