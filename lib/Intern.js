// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        console.log(`Enter an employee's school: ${this.school}`);
        return this.school;
    }

    getRole() {
        console.log(`Define the position of an employee: ${this.Intern}`);
        return "Intern";
    }
}

const intern = new Intern();

module.exports = Intern;