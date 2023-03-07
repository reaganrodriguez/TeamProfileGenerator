
// TODO: Write code to define and export the Employee class
class Employee {
    constructor(...args) {
      [this.name, this.id, this.email] = args;
    }
  
    // returning name from input
    getName() {
      return this.name;
    }
  
    // returning ID from input
    getId() {
      return this.id;
    }
  
    // returning email from input
    getEmail() {
      return this.email;
    }
  
    // returning employee type
    getRole() {
      return 'Employee';
    }
  }
  
  module.exports = Employee;
  