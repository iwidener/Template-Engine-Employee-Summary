const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const employees = [];
const idArray = [];

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

async function init() {
    await makeManager();
    buildTeam();
};

function makeManager() {
    return new Promise((resolve, reject) => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "Enter a manager's name: ",
                },
                {
                    type: "input",
                    name: "managerId",
                    message: "Enter a manager's id: ",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    message: "Enter a manager's email: ",
                },
                {
                    type: "input",
                    name: "managerOfficeNumber",
                    message: "Enter a manager's office number: ",
                },
            ])
            .then(answers => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
                employees.push(manager);
                idArray.push(answers.managerId);
                resolve();
            });
    })
}

function makeEngineer() {
    inquirer
        .prompt([

            {
                type: "input",
                name: "engineerName",
                message: "Enter an engineer's name: ",
            },
            {
                type: "input",
                name: "engineerId",
                message: "Enter an engineeer's id: ",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter an engineer's email: ",
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "Enter an engineer's GitHub username: ",
            },

        ])
        .then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
            employees.push(engineer);
            buildTeam();
        })
}

function makeIntern() {
    inquirer
        .prompt([

            {
                type: "input",
                name: "internName",
                message: "Enter an intern's name: ",
            },
            {
                type: "input",
                name: "internId",
                message: "Enter an intern's id: ",
            },
            {
                type: "input",
                name: "internEmail",
                message: "Enter an intern's email: ",
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter an intern's school name: ",
            },

        ])
        .then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            employees.push(intern);
            buildTeam();
        })
}

function generateCards() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(employees), 'utf-8');
    console.log("html generated");
}

function buildTeam() {
    console.log("Hello! Build an engineering team that should consist of manager and any number of engineers and interns.");
    inquirer
        .prompt([
            {
                type: "list",
                name: "position",
                message: "What member do you want to add?",
                choices: ["Engineer", "Intern", "I don't want to add any member"]
            }
        ])
        .then(answers => {
            switch (answers.position) {
                case "Intern":
                    makeIntern();
                    break;
                case "Engineer":
                    makeEngineer();
                    break;
                case "I don't want to add any member":
                    console.log("Exit");
                    generateCards();
                    break;
            }
        })
}

init();