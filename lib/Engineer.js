// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        console.log(`Enter an employee's GitHub username: ${this.github}`);
        return this.github;
    }
    getRole() {
        console.log(`Define the position of an employee: ${this.Engineer}`);
        return "Engineer";
    }
}

const engineer = new Engineer();

module.exports = Engineer;