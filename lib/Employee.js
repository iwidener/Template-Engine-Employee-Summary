// TODO: Write code to define and export the Employee class
const Employee = require("../lib/Employee");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(name) {
        console.log(`Provide an employee's name: ${this.name}`);
    }


    getId(id) {
        console.log("Enter an employee's id: " + id);
    }

    getEmail(email) {
        console.log("Enter an employee's email: " + email);

    }

    getRole(Engineer, Intern, Manager) {
        console.log("Define the position of an employee: " + Engineer, Intern, Manager);
        return Employee;
    }

}

const e = new Employee();

module.exports = Employee;