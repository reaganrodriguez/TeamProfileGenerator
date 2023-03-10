// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, ...args) {
        // calling employee constructor with args as an array
        super(name, id, email); 
        
        this.officeNumber = args[0]; 
       // this.args = args;
    }

    // override employee role to manager 
    getRole () {
        return "Manager";
    }
}


module.exports = Manager;
