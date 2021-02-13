
// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util");
const generateReadme = require("./utils/generateReadme");
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input

const questions = [

inquirer
.prompt([
    {
        name: "username",
        type: "input",
        message: "What is your GitHub username? ",
},
{
        name: "email",
        type: "input",
        message: "What is your email address? ",
},
    {
        name: "project_title",
        type: "input",
        message: "What is the title of your project? ",
},
    {
        name: "description",
        type: "input",
        message: "Describe your project: ",
},
{
        name: "installation",
        type: "input",
        message: "Describe the installation process if any: ",
},
    {
        name: "usage",
        type: "input",
        message: "Provide instructions and examples for use:",
},
    {
        name: "contribution",
        type: "input",
        message: "Provide contribution guidelines:",
},
    {
        name: "test",
        type: "input",
        message: "Provide test instructions:",
},
    {
        name: "license",
        type: "list",
        message: "Choose the license,",
        choices: ["MIT", "Apache", "Academic", "GNU", "ISC", "Mozilla", "Open", "None" ]
},
])
];



// TODO: Create a function to write README file

const writeToFile = (fileName, data) => {
    fs.writeToFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(success)
        );
    
 // Write new README.md to output directory

        fs.writeFile('./output/README.md', generateReadme(data));
        console.log('Successfully wrote to README.md');
       
    }
  

// Function call to initialize app
init();
