
// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util");
const generateReadme = require("./utils/generateReadme");
const { stringify } = require("querystring");
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input

const questions = [
    
       

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
        message: "Briefly describe your project: ",
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
        message: "Choose the license for your project:",
        choices: ["MIT", "Apache", "GNU", "Mozilla", "None" ]
},

    
]


// TODO: Create a function to write README file
function writeToFile (data) {
    const Markdown = generateReadme (data)
    fs.writeFileSync ("./output/Readme.md", Markdown, error =>{
        if (error) console.log(error)
        
    })
}

  
 // TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then(data => {
    writeToFile(data)
})}
 

// Function call to initialize app
init();
    

