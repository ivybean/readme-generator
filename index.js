const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

// array of questions for user
function promptUser() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your e-mail address?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github"
    },
    {
      type: "input",
      message: "What is your project title?",
      name: "title"
    },
    {
      type: "input",
      message: "Please provide a project description.",
      name: "description"
    },
    {
      type: "input",
      message: "Please provide the Table of Contents",
      name: "tableOfContents"
    },
    {
      type: "input",
      message: "Please provide installation instructions.",
      name: "installationInstructions"
    },
    {
      type: "input",
      message: "Please provide usuage information.",
      name: "usageInformation"
    },
    {
      type: "input",
      message: "Please provide contribution guidelines.",
      name: "contributionGuidelines"
    },
    {
      type: "input",
      message: "Please provide test instructions.",
      name: "testInstructions"
    },
    {
      type: "list",
      message: "Choose a license for your applicaiton.",
      choices: ["MIT", "None", "Apache 3.0"],
      name: "userLicense",
    },
  ]).then(function(answers){
    var makeReadMe = generateMarkdown(answers);
    writeToFile(`${answers.title}-README.md`, makeReadMe);
  })
}

// function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, () => { 
    console.log("Your README has been generated");
  });
}

// function to initialize program
function init() {
  promptUser();
}

// function call to initialize program
init();





