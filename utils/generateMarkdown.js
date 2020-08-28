//License icon

let licenseIcon;
let licenseURL;

function getLicenseIconURL(answers) {
  if (answers.userLicense === "Apache License 2.0") {
    licenseURL = "https://www.apache.org/licenses/LICENSE-2.0";
    licenseIcon = "Apache-brightgreen";

  } else if (answers.userLicense === "BSD 2-Clause License") {
    licenseURL = "https://opensource.org/licenses/BSD-2-Clause";
    licenseIcon = "BSD2-yellow";

} else if (answers.userLicense === "BSD 3-Clause License") {
    licenseURL = "https://opensource.org/licenses/BSD-3-Clause";
    licenseIcon = "BSD3-yellow";

  } else if (answers.userLicense === "Boost Software License 1.0") {
    licenseURL = "https://www.boost.org/LICENSE_1_0.txt";
    licenseIcon = "Boost-orange";

} else if (answers.userLicense === "Creative Commons Zero v1.0 Universal") {
    licenseURL = "https://creativecommons.org/publicdomain/zero/1.0/legalcode";
    licenseIcon = "CCZero-red";

} else if (answers.userLicense === "Eclipse Public License 2.0") {
    licenseURL = "https://www.eclipse.org/legal/epl-2.0/";
    licenseIcon = "Eclipse-blue";

} else if (answers.userLicense === "GNU Affero General Public License v3.0") {
    licenseURL = "https://www.gnu.org/licenses/agpl-3.0.en.html";
    licenseIcon = "GNUAffero-green";

} else if (answers.userLicense === "GNU General Public License v2.0") {
    licenseURL = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    licenseIcon = "GNUv2-green";

} else if (answers.userLicense === "GNU Lesser Public License v2.1") {
    licenseURL = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
    licenseIcon = "GNULesser-green";

}  else if (answers.userLicense === "GNU General Public License v3.0") {
  licenseURL = "https://www.gnu.org/licenses/gpl-3.0.en.html";
  licenseIcon = "GNUv3-green";

} else if (answers.userLicense === "MIT License") {
  licenseURL = "https://opensource.org/licenses/MIT";
  licenseIcon = "MIT-yellowgreen";

} else if (answers.userLicense === "Mozilla Public License 2.0") {
    licenseURL = "https://www.mozilla.org/en-US/MPL/2.0/";
    licenseIcon = "MozillaPublic-blueviolet";

} else {
    licenseURL = "https://unlicense.org/";
    licenseIcon = "Unlicense-lightgrey"
};
}


// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  return `
  # ${answers.title}
  
  ![](https://img.shields.io/badge/License-${licenseIcon})

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
  [E-mail:](mailto:${answers.email})
  [Github:](github.com/${answers.github})

  ### User License
  
  ${answers.userLicense} -- (${licenseURL})

`;
}

module.exports = generateMarkdown;
