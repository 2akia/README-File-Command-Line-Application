// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/badge/license-${data.license.trim()}-blue.svg)

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${licenseNotice(data.license)}
  
  
  ## Contributing
  ${data.contributing}

  ## Tests
${data.tests}

## Questions
If you have any questions, you can reach me through:

GitHub: [${data.username}](https://github.com/${data.username})

Email: [${data.email}](mailto:${data.email})

`;
}

function licenseNotice(license) {
  if (license === 'None') {
    return 'This project is not licensed.';
  }else{
    return license;
  }
}

module.exports = generateMarkdown;
