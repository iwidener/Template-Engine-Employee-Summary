// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(`Enter an employee's office number: ${this.officeNumber}`);
        return this.officeNumber;
    }

    getRole() {
        console.log(`Define the position of an employee: ${this.Manager}`);
        return "Manager";
    }
}

const e = new Manager();

module.exports = Manager;