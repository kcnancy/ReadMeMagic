const inquirer = require("inquirer")
const fs = require("fs");
fs.writeFile(Readme.md, data) {}

inquirer
.prompt([
    {
        name: "GitHubname",
        type: "input",
        message: "What is your GitHub username?",
},
{
    name: "email",
    type: "input",
    message: "What is your email address?",
},
    {
        name: "project_title",
        type: "input",
        message: "What is the title of your project?",
},
    {
    name: "description",
    type: "input",
    message: "Describe your project,",
},
    {
    name: "usage",
    type: "input",
    message: "Provide instructions and examples for use,",
},
    {
    name: "contribution",
    type: "input",
    message: "Provide contribution guidelines,",
},
    {
    name: "test",
    type: "input",
    message: "Provide test instructions,",
},
    {
    name: "license",
    type: "list",
    message: "Choose the license,",
    choices: ["MIT", "Bower", "None" ]
},
])
//..console log to check my questions
.then ((answer) => {
console.log("My Project is" + answer.project_title);
console.log(answer.GitHubname);
console.log(answer.email)
});