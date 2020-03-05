// TODO: Write code to define and export the Employee class
//const Employee = require("./Employee");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        console.log(this);
    }

    getName() {
        console.log(`Provide an employee's name: ${this.name}`);
        return this.name;
    }


    getId() {
        console.log(`Enter an employee's id: ${this.id}`);
        return this.id;
    }

    getEmail() {
        console.log(`Enter an employee's email: ${this.email}`);
        return this.email;
    }

    getRole() {
        console.log(`Define the position of an employee: ${this.Employee}`);
        return "Employee";
    }

}

const employee = new Employee();

module.exports = Employee;