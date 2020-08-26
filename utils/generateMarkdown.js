// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  return `
  # ${answers.title}
  
  ## Table of Contents

  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contribution Guidelines](#contribution-guidelines)
  5. [Test Instructions](#test-instructions)
  5. [Contact Information](#contact-information)
  

  _________________________________

  ### Project Description

  ${answers.description}

  _________________________________

  ### Installation Instructions
  
  ${answers.installationInstructions}

  _________________________________

  ### Usage Information
  
  ${answers.usageInformation}

  _________________________________

  ### Contribution Guidelines
  
  ${answers.contributionGuidelines}
  _________________________________

  ### Test Instructions
  
  ${answers.testInstructions}
  _________________________________

  ## Contact Information
  * ${answers.name}
  [E-mail:] ${answers.email}
  [Github:] ${answers.github}

  ### User License
  
  ${answers.userLicense}

`;
}

module.exports = generateMarkdown;
