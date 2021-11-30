const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const outputDir = path.resolve(__dirname,"output");
const outputPath = path.join(outputDir, "Team.html")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateTemplate");

const teamArray =[];

const questions = [
  {
    message: "what team member would you like to add?",
    type: "list",
    name: "role",
    choices: ["manager", "intern", "engineer"],
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  { type: "input", name: "email", message: "What is the email?" },

  {
    type: "input",
    name: "github",
    message: "What is your github username?",
    when: (answer) => answer.role === "engineer",
  },

  {
    type: "input",
    name: "office_number",
    message: "What is your office number?",
    when: (answer) => answer.role === "manager",
  },
  {
    type: "input",
    name: "intern_school",
    message: "What is your school?",
    when: (answer) => answer.role === "intern",
  },
  {
    message: "Are there additional team members you  would you like to add?",
    type: "list",
    name: "Yes_No",
    choices: ["yes", "No"],
  },
];
function askStart(){
inquirer.prompt(questions).then ((answer)=>{
    if (answer.role==="engineer"){
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        teamArray.push(engineer);
    }

//intern
    if (answer.role==="intern"){
        const intern = new Intern(
          answer.name,
          answer.id,
          answer.email,
          answer.intern_school
        );
        teamArray.push(intern);
    }


//manager
    if (answer.role==="manager"){
        const manager = new Manager(answer.name, answer.id, answer.email, answer.office_number);
        teamArray.push(manager);
    }

if (answer.Yes_No==="yes"){
    askStart();
    
}
else {
    fs.writeFile(outputPath, generateHTML(teamArray),(error)=>{if (error){
return console.log (error)
 }
 console.log("it works")
});
}

})

}


  askStart();
 